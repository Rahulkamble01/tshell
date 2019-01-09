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

  
# Prepare Mysql Database
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

#  Start with the tShell Services Part
### Get your tShell project in Eclipse 
1. Open your Eclipse 
2. Select the workspace where you want to work for tShell project.
3. Inside Eclipse go to File -> Open projects from File System...
3. Choose the directory:  
   D:\tshell-project\tShell\service\tshell
4. Now you will see your project in Eclipse.

###  Get All your Maven Repository
1. Open your WinSCP5.9.4 .
2. Give your IP address: 10.142.194.148 and Port Number: 22.
3. They will ask for permission.
4. Choose option 'Yes' .
5. Login with your Employee Id as UserName and your Password .
6. In the Left Hand Side open this `C:\Users\[Your Employee Id]\.m2\repository` folder . 
7. On Right Hand Side Navigate to `/tshell-repo` folder.
8. Copy all 16 folders .
9. Then Paste it on Left Hand Side 'repository' folder already opened.
10. Now you have all Maven Repository.

### To Remove Pom.xml error in Eclipse
1. Inside Eclipse if pom.xml is showing any error then update your project by:
2. Right clicking on tShell project -> select Maven -> select Update Project.
3. Now, you will find all your errors will be removed.

### To Run tShell project as Java Application
1. Go to `com.cts.tshell` -> `app.java`.
2. Then right click on `app.java` and select `Run as` -> `Java Application`.



# Prepare your Angular Project

### Get tShell UI Part in Visual Studio 
1. Open visual studio.
2. Go to File then select Open Folder.
3. Select folder `D:\tshell-project\tShell\ui\tshell`.
4. Now you have your tshell UI part in Visual Studio.

### Opening of Angular in Visual Studio Code
1. For opening the terminal, click on View -> Integrated Terminal.
2. In the Terminal run command `npm install` to get all node modules.

### For Testing tShell Project running end to end
1. For running your application on local PC run this command:  
   `ng serve --proxy-config proxy.conf.json`.
2. Browser will open with Local Host:4200.
3. Check the application by Loging In to ensure that it works end to end.

# To Deploy your application on Server

### To deploy Service Part of tShell Project
1. Create a War file of your tShell project.
2. For creating the War file you need to do following steps:
3. Open folders in Eclipse as:   
   `File -> Export -> WAR file -> give web project: tshell and Destination where you want to save -> Finish`
4. Open WinSCP by executing WinSCP.exe.
5. Give IP address:10.142.194.148 and port number:22
6. Login with your employee Id and password.
7. In the Left Hand side open folder where your WAR file is saved.
8. On right Hand Side open folder as:`/opt/apache-tomcat-8.0.36/webapps` .
9. Inside this folder drag and drop your WAR file from Left Hand Side.

### To deploy Your Angular Part
1. Your need to create a dist file.
2. For creating dist run this command by creating your base-href:
   `ng build --prod --base-href /tShell-project` 
3. You will find your dist file created in the folder:
   `D:\tshell-project\tShell\ui\tshell`
4. Inside dist you will find Index.html having base-href as the name you have given.
5. Now again open winSCP and drag and drop this dist file on Right hand side.
6. In the folder:`/opt/apache-tomcat-8.0.36/webapps`
7. In the same way as you have done with your WAR file.
8. Your angular part will get deployed on server. 

### To deploy your SQL Script 
1. You need to create the dump of your SQL script first.
2. So, Open MySql Workbench
3. Open Server Administration and give password:root.
4. In the menu bar go to `Data Export`
5. Right Hand Side Select your tshell project in checkboxes.
6. Move down side and Select `Export to self-contained file`
7. Your file path will be:`C:\Users\729721\Documents\dumps\tShell.sql`
8. Here your dump script file will get saved.
9. Select option `Start Export` to create your dump.
10. Now Open WinSCP.exe.
11. On right hand side open folder `/home/729721` 
12. On left hand side open folder `C:\Users\729721\Documents\dumps\tShell.sql`
13. Drag and drop this sql script on right hand side opened folder.
14. Now your Sql Script will be deployed on server.

### Creating database using Sql script on Server usins Putty
1. open putty.
2. Give your Ip address as `10.142.194.148` .Select Open.
2. Login with your employee Id and your password.
3. Now give command `mysql -u root -p` and password `mysqlCT5` .
4. Check for your schema by command:  
   `show schemas;`
5. If your schema is not there then run this command:
   `source /home/[your Employee Id]/tshell.sql` .
6. Again check for your schema.
