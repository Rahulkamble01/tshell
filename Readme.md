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
  1. Get access to both these server `10.142.194.148` and `10.142.194.149`  by raising the GSD.
  
  

# Get the project using Git
1. Create a folder in D: drive with the name as 'tshell-project' in which you want to download the tshell project.
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
`git checkout release1`  
For Example,  
`git config --global user.name "Ankita Singh5"`   
`git config --global user.email "ankita.singh4@cognizant.com"`    
`git clone https://code.cognizant.com/125546/tShell.git`   
In case of SSL error:   
`git config --global http.sslVerify false`  
`git clone https://code.cognizant.com/125546/tShell.git`  
`git checkout release1`

  
# Prepare Mysql Database
### Check if MySql is running
1. Open Task Manager
2. In Task Manager select Services.
3. Make the MySql status running if it is stopped.
4. Make it run by right clicking on 'Stopped' status and selecting 'Start' option.
5. Now your MySql will be in 'Running' status.

### Prepare tShell schema
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

#  Start with the tShell services part
### Get your tShell project in Eclipse 
1. Open your Eclipse 
2. Select the workspace as `D:\tshell-workspace`
3. Inside Eclipse go to File -> Open projects from File System...
3. Choose the directory:  
   `D:\tshell-project\tShell\service\tshell`
4. Now you will see your project in Eclipse.

###  Get All your Maven Repository
1. Open your WinSCP5.9.4 and execute WinSCP.exe application file.
2. Give your IP address: 10.142.194.148 and Port Number: 22.
3. They will ask for permission.
4. Choose option 'Yes' .
5. Login with your Employee Id as UserName and your Password .
6. In the left hand side open this `C:\Users\[Your Employee Id]\.m2\repository` folder . 
7. On right hand side navigate to `/tshell-repo` folder.
8. Copy all 16 folders .
9. Then Paste it on left hand side 'repository' folder already opened.
10. Now you have all Maven Repository.

### To remove pom.xml error in Eclipse
1. Inside Eclipse if pom.xml is showing any error then update your project by:
2. Right clicking on tShell project -> select Maven -> select Update Project.
3. Now, you will find all your errors will be removed.

### To Run tShell project as Java Application
1. In project explorer expand `com.cts.tshell`.
2. Then right click on `App.java` and select `Run as` -> `Java Application`.
3. In console,logs will run, so wait till server starts.


# Prepare your Angular Project

### Get tShell UI part in Visual Studio Code 
1. Open visual studio.
2. Go to File then select Open Folder.
3. Select folder `D:\tshell-project\tShell\ui\tshell`.
4. Now you have your tshell UI part in Visual Studio.

### Opening of Angular in Visual Studio Code
1. For opening the terminal, click on View -> Integrated Terminal.
2. In the Terminal run command `npm install` to get all node modules.
3. It will take a while,wait till it complete.

### For testing tShell project running end to end
1. For running your application on local PC run this command:  
   `ng serve --proxy-config proxy.conf.json`
2. Browser will open with http://localhost:4200/
3. Check the application by Signing Up freshly to ensure that it works end to end.

# To deploy your application on server

### Update database changes in the server
This section is applicable only if there is any change required in the database. 
For example, it can be for creation of new tables, new columns, remove columns, etc.
If there are these kind of structural changes then ensure that you have a new 
.sql file available in tshell/db folder with appropriate numbering. The following 
steps will tell how to make necessary changes to the server database.

1. For our example, we will use the following file from db folder:   
   `002_tShell_alter_user_for_forgot_password.sql`
2. Open WinSCP to transfer the sql file.
3. On right hand side open folder `/home/[your employee Id]` 
4. On left hand side open folder  
   `d:\tshell-project\tshell\db\002_tShell_alter_user_for_forgot_password.sql`
5. Drag and drop this sql script on right hand side opened folder.
6. Login into `10.142.194.149` using putty.
7. Login with your credentials
8. Open mysql client, `mysql -u root -p` and password as `mysqlCT5`.
9. Execute following commands:  
   `use tshell;`  
   `set autocommit=0`  
   `source /home/[Employee Id]/002_tShell_alter_user_for_forgot_password.sql`
10. Check the execution log and ensure that there are not errors. If there are errors  
    execute the `rollback;` command and correct the sql file and try executing again.
11. If there are not errors then execute the `commit` command.

### To deploy service part of tShell project
To deploy restful webservice, we need to create WAR and then transfer to server.
1. In eclipse, right click on tshell project:   
   Export -> Export... -> WAR file -> Destination as `D:\tshell-service.war`
2. Open 10.142.194.149 using WinSCP.
3. Login with your credentials.
4. In the left hand side open D: folder.
5. On right hand side open folder  
   `/opt/tomcat9/webapps` .
6. Drag and drop WAR file from left hand side to right hand side.

### To deploy Your Angular part
Create a production distribution folder and transfer the contents of this folder to server.
1. In Visual Studio Code terminal window execute below command to create dist folder:  
   `ng build --prod --base-href /tshell/` 
2. Open 10.142.194.149 using WinSCP.exe
3. On right hand side go to `/opt/tomcat9/webapps/tshell` folder and remove the existing files and folder.
4. Now go on left hand side in `D:\tshell-project\tShell\ui\tshell\dist` folder.  
5. Select all the files and folders.
6. Drag and drop all files and folder from left hand side to right hand side.
7. Test if the application is working using `http://10.142.194.149:8080/tshell`

### Debugging your application in server
1. If there is a need to check the database use the mysql command specified above.
2. To look for any errors in the tomcat log open a new putty window and use the following command:  
   `tail -f /opt/tomcat9/logs/catalina.out`



