# Cytiva Assignment Solution

## Overview
This repository contains the solution for the **Danaher/Cytiva** interview assignment. The solution implements a **System Class** that provides a simplified interface to work with two subsystems (**subsystemHold** and **subsystemFire**). The client interacts with the System Class without knowing the underlying complexities of the subsystems.

## Problem Statement
The task involves designing a **System Class** that acts as a **Facade** for the two subsystems:

### Subsystems
1. **subsystemHold**
   - `operation1()` → Ready!
   - `operationN()` → Hold!
   - `operationEnd()` → Stop!

2. **subsystemFire**
   - `operation1()` → Ready!
   - `operationZ()` → Fire!
   - `operationEnd()` → Stop!

### System Class
- Provides a simple interface for the client.
- Delegates client requests to appropriate subsystem methods.
- Manages the lifecycle of subsystems.

### Client Class
- Interacts only with the System Class.
- Does not know about the existence of subsystems.
- Requests actions (`hold`, `fire`, `stop`) through the System Class.

### Expected Output
```
System initializes subsystems:
subsystemHold: Ready!
subsystemFire: Ready!
System orders subsystems to perform the action:
subsystemHold: Hold!
System orders subsystems to perform the action:
subsystemFire: Fire!
System orders subsystems to perform the action:
subsystemHold: Stop!
subsystemFire: Stop!
```

## Implementation Details
- **Backend:** .NET Core API
- **Frontend:** ReactJS (Client Component)
- **API Endpoint:** `http://localhost:5128/api/system?action={action}`
- **Actions Supported:** `hold`, `fire`, `stop`
- **Data Handling:** JSON response with action status messages

## Getting Started
### Prerequisites
- .NET SDK
- Node.js & npm (for frontend)
- Visual Studio Code (Recommended IDE)

### Setup Instructions
1. **Clone the Repository**
   ```sh
   git clone https://github.com/LinUxTo5re/Cytiva-Assignment-
   cd Cytiva-Assignment-
   ```
2. **Run Backend API**
   ```sh
   cd backend
   dotnet run
   ```
3. **Run React Client**
   ```sh
   cd frontend
   npm install
   npm start
   ```

## API Usage
| Method | Endpoint | Description |
|--------|---------|-------------|
| GET | `/api/system?action=hold` | Holds the subsystem |
| GET | `/api/system?action=fire` | Fires the subsystem |
| GET | `/api/system?action=stop` | Stops both subsystems |

## Author
**Chaitanyaa Ajabe**  
Solution developed for **Danaher/Cytiva** interview assignment.

## Screenshot
![image](https://github.com/user-attachments/assets/c909b8be-27f9-47e3-ba94-3ab26b0fffa5)
