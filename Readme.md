# Softwares Required  
1. Visual Studio Code
2. Eclipse
3. Tomcat Server
4. MySql Workbench
5. Git 
6. WinSCP 5.9.4
7. Putty
8. MySql Server

### PreRequisites  
  1. Get access to this server 10.142.194.148 by raising the GSD.
  
# Get the project using Git
1. Create a folder in D: drive with the name as 'tshell-project' in which you want to download the tShell project.
2. Open Windows Explorer.
3. Go to the folder you created i.e tshell-project.
4. Right click on the right hand side blank area.
5. Select "Git Bash Here".
6. Run following commands one by one:  
`git config --global user.name "[FIRST NAME] [LAST NAME]"`     
`git config --global user.email "[COGNIZANT EMAIL ID]"`     
`git clone https://code.cognizant.com/125546/tShell.git`
7. If you get any error regarding SSL Certificate Problem then run this command and retry the clone command:  
  `git config --global http.sslVerify false` 
8. Now switch to release1 branch from master to start working by this command:  
`git checkout release1`.  
For Example,  
`git config --global user.name "Ankita Singh5"`   
`git config --global user.email "ankita.singh4@cognizant.com"`    
`git clone https://code.cognizant.com/125546/tShell.git`   
In case of SSL error:   
`git config --global http.sslVerify false`
`git clone https://code.cognizant.com/125546/tShell.git`  
`git checkout release1`

  
# To Start the Mysql Database
### Check if MySql is Running
1. Open Task Manager
2. In Task Manager select Services.
3. Make the MySql status running if it is stopped.
4. Make it run by right clicking on 'Stopped' status and selecting 'Start' option.
5. Now your MySql will be in 'Running' status.

### Prepare tShell Schema
1. Open your command prompt:
2. Run this command:  
   `mysql -u root -p`  
3. Give password as : root.
4. Execute all script files from `D:/tshell-project/tShell/db` folder in the given serial order. 
5. Execute script files using this command:  
  ` source [address of the folder where tshell script file is present]`  
   For Example : `source  D:/tshell-project/tShell/db/001_tShell_create_schema.sql`
6. Open MySql Workbench and check if tShell Schema is there.
7. Check if tables are present.

# To Start with the tShell Services Part
### To Get your tShell project in Eclipse 
1. Open your Eclipse 
2. Select the workspace where you want to work for tShell project.
3. Inside Eclipse go to File -> Open projects from File System...
3. Choose the directory:  
   D:\tshell-project\tShell\service\tshell
4. Now you will see your project in Eclipse.

### To Get your Maven Repository
1. Open your WinSCP5.9.4 .
2. Give your IP address as 10.142.194.148 and Port Number: 22.
3. They will ask for permission.
4. Choose option 'Yes' .
5. Login with your Employee Id as UserName and your Password .
6. In the Left Hand Side open this `C:\Users\[Your Employee Id]\.m2\repository` folder . 
7. On Right Hand Side Navigate to `/tshell-repo` folder.
8. Copy all 16 folder .
9. Then Paste it on Left Hand Side 'Repository' folder already opened.
10. Now you have all Maven Repository.

### To Remove Pom.xml error in Eclipse
1. Inside Eclipse if pom.xml is showing any error then update your project by:
2. Right clicking on tShell project -> select Maven -> select Update Project.
3. Now, you will find all your errors will be removed.

### To Run tShell project as Java Application
1. Go to `com.cts.tshell` -> `app.java`.
2. Then right click on `app.java` and select `Run as` -> `Java Application`.

### To run tShell project on Local Server 
1. Select Server in the terminal of Eclipse. 
2. Click on add server link given in the terminal.
3. Choose folder where Apache Tomcat is present, click Next then choose tShell project and click Finish :
   For Example: `Apache -> Tomcat v9.0 Server -> Select Next ->tShell -> select Finish .
4. Then select 'Start the Server' option in the terminal.

# To Work in Visual Studio Code

### Get tShell UI Part in Visual Studio 
1. Open visual studio.
2. Go to File then select Open folder.
3. Select folder `D:\tshell-project\tShell\ui\tshell`.
4. Now you have your tshell UI part in Visual Studio.

### Opening of Visual Studio Terminal
5. For opening the terminal, click on View -> Integrated Terminal.
4. In the Terminal run command `npm install` to get all node modules
5. For running your application on local PC run this command:  
   `ng serve --proxy-config proxy.conf.json`.

# To Deploy your application on Server
1. Go to d:\\installables\[putty.exe] and and extract [WinSCP5.9.4.zip] file.
2. double click putty and give ip address as 10.223.99.44 and port as 22 and open then choose Yes.
3. Enter your cognizant Id and it's password.
4.  
