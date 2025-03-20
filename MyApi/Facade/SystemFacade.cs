using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/system")]
public class SystemFacade : ControllerBase
{
    private readonly IHoldSubsystem _subsystemHold;
    private readonly IFireSubsystem _subsystemFire;

    public SystemFacade(IHoldSubsystem subsystemHold, IFireSubsystem subsystemFire)
    {
        _subsystemHold = subsystemHold;
        _subsystemFire = subsystemFire;

        Console.WriteLine("System initializes subsystems:");
        Console.WriteLine($"subsystemHold: {_subsystemHold.Operation1()}");
        Console.WriteLine($"subsystemFire: {_subsystemFire.Operation1()}");
    }

    [HttpGet]
    public IActionResult Operation([FromQuery] string action)
    {
        var response = new List<string>
        {
            "⚙️ System orders subsystems to perform the action:"
        };

        switch (action)
        {
            case "hold":
                response.Add($"⏸️ subsystemHold: {_subsystemHold.OperationN()}");
                break;
            case "fire":
                response.Add($"🔥 subsystemFire: {_subsystemFire.OperationZ()}");
                break;
            case "stop":
                response.Add($"⛔ subsystemHold: {_subsystemHold.OperationEnd()}");
                response.Add($"⛔ subsystemFire: {_subsystemFire.OperationEnd()}");
                break;
            default:
                return BadRequest(new { message = "❌ Invalid action" });
        }

        return Ok(new { messages = response });
    }
}
