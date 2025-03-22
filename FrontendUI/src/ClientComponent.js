import { useState, useEffect } from "react";
import { FaPause, FaFire, FaStop } from "react-icons/fa";

function ClientComponent() {
    const [result, setResult] = useState([]);

    useEffect(() => {
        setResult([
            "🛠️ System initializes subsystems:",
            "⏸️ subsystemHold: Ready!",
            "🚀 subsystemFire: Ready!"
        ]);
    }, []);

    const handleClick = async (action) => {
        try {
            const response = await fetch(`http://localhost:5128/api/system?action=${action}`);
 
            if (!response.ok) throw new Error("Failed to fetch");

            const data = await response.json();
            console.log("API Response:", data);
            alert(data.messages.join("\n"));
            setResult(data.messages); 
        } catch (error) {
            console.error("Error:", error);
            setResult(["❌ Error: Could not retrieve system response."]);
        }
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <button onClick={() => handleClick('hold')} style={{ margin: "10px", padding: "10px" }}>
                <FaPause /> Hold
            </button>
            <button onClick={() => handleClick('fire')} style={{ margin: "10px", padding: "10px" }}>
                <FaFire /> Fire
            </button>
            <button onClick={() => handleClick('stop')} style={{ margin: "10px", padding: "10px" }}>
                <FaStop /> Stop
            </button>
            <div style={{ marginTop: "20px", textAlign: "left", whiteSpace: "pre-line", background: "#f5f5f5", padding: "10px", borderRadius: "5px" }}>
                {result.join("\n")}
            </div>
        </div>
    );
}

export default ClientComponent;
