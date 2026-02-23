# STARtTalking: System Architecture and UML Diagram Definitions

This document contains the source code for all required system architecture and UML diagrams for the **STARtTalking** soft-skills development platform. These can be rendered using **PlantUML**, **GraphViz (DOT)**, or online editors like [PlantText](https://www.planttext.com/).

---

## 🏗️ 1. System Architecture (PlantUML)
```plantuml
@startuml
!include <azure/AzureCommon>
!include <azure/Web/AzureAppService>
!include <azure/Databases/AzureCosmosDb>
!include <azure/AI/AzureCognitiveServices>
!include <azure/Networking/AzureContentDeliveryNetwork>

title STARtTalking: Cloud-Native System Architecture (Liquid Glass UI Implementation)

package "Client-Side (React + Vite)" {
  component [Liquid Glass Frontend] as frontend
  component [Speech Recording Engine] as recorder
}

package "API Gateway & Application Layer" {
  component [Node.js / Express Server] as backend
  component [Authentication Service] as auth
}

package "AI & Intelligence Services" {
  component [Azure Speech-to-Text] as stt
  component [OpenAI GPT-4 Analysis] as ai
  component [Sentiment & Tone Analyzer] as tone
}

package "Persistence Layer" {
  database "CosmosDB (NoSQL)" as db
  storage "Azure Blob (Audio Storage)" as blob
}

' --- Connections ---
frontend --> backend : REST / GraphQL APIs
frontend --> recorder : Native Browser Audio API
backend --> auth : JWT Validation
backend --> db : JSON Persistence
recorder --> blob : Upload .wav / .webm
blob --> stt : Audio Processing Stream
stt --> ai : Text Data
ai --> tone : Contextual Feedback
tone --> backend : Structured Feedback JSON
backend --> frontend : Render Feedback View
@enduml
```

---

## 📋 2. Use Case Diagram (PlantUML)
```plantuml
@startuml
left to right direction
skinparam packageStyle rectangle

actor "User (Practitioner)" as user
actor "AI Engine (System)" as ai_system
actor "Administrator" as admin

rectangle "STARtTalking System" {
  ' --- User Actions ---
  user -- (Register/Login)
  user -- (View Dashboard Stats)
  user -- (Build Story/Script)
  user -- (Record Practice Session)
  user -- (Review AI Feedback)
  user -- (Update Profile)
  
  ' --- System Actions ---
  (Record Practice Session) ..> (Process Audio) : <<include>>
  (Process Audio) -- ai_system
  (Generate Feedback) -- ai_system
  (Generate Feedback) ..> (Review AI Feedback) : <<extend>>
  
  ' --- Admin Actions ---
  admin -- (Monitor System Health)
  admin -- (Manage User Accounts)
}
@enduml
```

---

## 🏗️ 3. Data Flow Diagrams (DFD)

### Level 0: Context Diagram (DOT)
```dot
digraph DFD0 {
  node [shape=box, style=filled, fillcolor=lightblue]; User; Admin; 
  node [shape=circle, style=filled, fillcolor=white]; System [label="STARtTalking\nSystem"];
  
  User -> System [label="Voice Input, Story Scripts, Profile Data"];
  System -> User [label="Feedback Reports, Progress Stats, UI Views"];
  
  Admin -> System [label="System Config, User Management"];
  System -> Admin [label="Audit Logs, Analytics Reports"];
}
```

### Level 1: Core Process DFD (PlantUML)
```plantuml
@startuml
title DFD Level 1: Functional Decomposition

node "User" as user
node "Admin" as admin

rectangle "System Processes" {
  usecase P1 as "1.0 Account Management"
  usecase P2 as "2.0 Content Building (Stories)"
  usecase P3 as "3.0 Practice Session Execution"
  usecase P4 as "4.0 AI Feedback Generation"
  usecase P5 as "5.0 Analytics & Reporting"
}

database "UserDB" as db1
database "StoryDB" as db2
database "FeedbackDB" as db3
database "AudioStore" as blob

user --> P1 : Credentials
P1 --> db1 : Save User
user --> P2 : Input Script
P2 --> db2 : Store Story
user --> P3 : Voice Input
P3 --> blob : Save Audio
blob --> P4 : Fetch Audio
P4 --> db3 : Save Score
P5 --> user : View Dashboard
admin --> P5 : Monitor
@enduml
```

---

## 🗄️ 4. Class Diagram (PlantUML)
```plantuml
@startuml
class User {
  - int id
  - String email
  - String passwordHash
  + login()
  + logout()
  + updateProfile()
}

class Story {
  - int storyId
  - String title
  - String category
  - String scriptContent
  + create()
  + delete()
}

class PracticeSession {
  - int sessionId
  - DateTime timestamp
  - float duration
  - URL audioUrl
  + startRecording()
  + stopRecording()
  + upload()
}

class FeedbackReport {
  - int reportId
  - float clarityScore
  - float toneScore
  - float empathyScore
  - String aiAdvice
  + generate()
  + display()
}

User "1" *-- "many" Story
User "1" *-- "many" PracticeSession
PracticeSession "1" -- "1" FeedbackReport
@enduml
```

---

## 🔄 5. Sequence Diagram: Practice Flow (PlantUML)
```plantuml
@startuml
actor User
boundary "Liquid Glass Frontend" as UI
control "Backend API" as API
entity "Storage/AI" as cloud
database "Database" as DB

User -> UI : Clicks "Start Practice"
UI -> UI : Activate Microphone
User -> UI : Speaks (Voice Recording)
User -> UI : Clicks "Stop"
UI -> API : Send Audio Stream (.wav)
API -> cloud : Upload to Blob Store
cloud -> cloud : Process (Speech-to-Text)
cloud -> cloud : Analyze Tone/Sentiments
cloud -> API : Return Feedback JSON
API -> DB : Persist Feedback Records
API -> UI : Return Success/Data
UI -> User : Show "Liquid Feedback" Scorecard
@enduml
```

---

## ⚡ 6. State Diagram: Recording Process (PlantUML)
```plantuml
@startuml
[*] --> Idle
Idle --> Recording : OnClick(Start)
Recording --> Paused : OnClick(Pause)
Paused --> Recording : OnClick(Resume)
Recording --> Processing : OnClick(Stop)
Processing --> Uploading : Valid Data
Processing --> Error : Corrupt Audio
Uploading --> GeneratingFeedback : Upload Finished
GeneratingFeedback --> Idle : View Report
Error --> Idle : Reset
@enduml
```

---

## 🔗 7. ERD: Chen Notation (PlantUML)
```plantuml
@startuml
left to right direction
skinparam linetype ortho

' Entities
node "USER" <<entity>> as user
node "STORY" <<entity>> as story
node "PRACTICE_SESSION" <<entity>> as practice
node "FEEDBACK" <<entity>> as feedback

' Attributes for User
circle "UserID" as u_id
circle "Email" as u_email
circle "Password" as u_pass
user - u_id
user - u_email
user - u_pass

' Attributes for Story
circle "StoryID" as s_id
circle "Title" as s_title
story - s_id
story - s_title

' Relationships
diamond "CREATES" as creates
diamond "PERFORMS" as performs
diamond "GENERATES" as generates

user -- creates
creates -- story

user -- performs
performs -- practice

practice -- generates
generates -- feedback
@enduml
```

---

## 🌊 8. Activity Diagrams

### Without Swimlanes
```plantuml
@startuml
start
:Login to Portal;
:Select/Create Story;
:Check Audio Hardware;
if (Hardware Ready?) then (yes)
  :Begin Speech Training;
  :Capture Voice Stream;
  :Stop & Process;
  :Analyze via AI Engine;
  :Display Feedback;
else (no)
  :Display Hardware Error;
endif
stop
@enduml
```

### With Swimlanes (Functional Flow)
```plantuml
@startuml
|User|
start
:Open Practice Dashboard;
:Select Story;
:Start Recording;
|Frontend|
:Access WebAudio API;
:Visualize Waveform;
|Backend|
:Endpoint Receives File;
:Trigger AI Pipeline;
|AI Engine|
:Extract Transcription;
:Extract Sentiment;
:Calculate Score;
|Backend|
:Update Database;
|User|
:Review Analysis;
stop
@enduml
```
