import { Component, OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { Option, Question, Quiz, QuizConfig } from '../models/index';
import { ExitAssesmentService } from '../exit-assesment.service';
import { Router } from '@angular/router';


// declare var countdown: any;

@Component({
  selector: 'app-exit-assesment',
  templateUrl: './exit-assesment.component.html',
  styleUrls: ['./exit-assesment.component.css'],
})
export class ExitAssesmentComponent implements OnInit, OnDestroy {
  json: any = [
    {
      'id': 1, 'name': 'Asp.Net Quiz', 'description': 'Asp.Net Quiz (contains webform, mvc, web API, etc.)',
      'questions': [
        // tslint:disable-next-line:max-line-length
        { 'id': 1010, "name": "ASP.NET webform separates the HTML output from program logic using a feature named as ASP.NET. There is a  feature in ASP.NET 2.0 that is used to fire a normal postback to a different page in the application, the name of the feature is , Please select the correct options from below given options", "questionTypeId": 1, "options": [{ "id": 1055, "questionId": 1010, "name": "Exception", "isAnswer": false }, { "id": 1056, "questionId": 1010, "name": "On IIS 6.0 and lower, pages written using different versions of the ASP framework cannot share session state without the use of third-party libraries. This does not apply to ASP.NET and ASP applications running side by side on IIS 7. With IIS 7.0, modules may be run in an integrated pipeline that allows modules written in any language to be executed for any request", "isAnswer": true }, { "id": 1057, "questionId": 1010, "name": "Code-front", "isAnswer": false }, { "id": 1058, "questionId": 1010, "name": "ASP.NET is an open-source[2] server-side web application framework designed for web development to produce dynamic web pages. It was developed by Microsoft to allow programmers to build dynamic web sites, web applications and web services.", "isAnswer": false }], "questionType": { "id": 1, "name": "Multiple Choice", "isActive": true } }, { "id": 1011, "name": "The feature in ASP.NET 2.0 that is used to fire a normal postback to a different page in the application is called", "questionTypeId": 1, "options": [{ "id": 1055, "questionId": 1010, "name": "Theme", "isAnswer": false }, { "id": 1057, "questionId": 1010, "name": "Code-front", "isAnswer": false }, { "id": 1056, "questionId": 1010, "name": "Cross Page Posting", "isAnswer": true }, { "id": 1058, "questionId": 1010, "name": "None of the above", "isAnswer": false }], "questionType": { "id": 1, "name": "Multiple Choice", "isActive": true } }, { "id": 1012, "name": "What class does the ASP.NET Web Form class inherit from by default?", "questionTypeId": 1, "options": [{ "id": 1055, "questionId": 1010, "name": "System.Web.UI.Page", "isAnswer": true }, { "id": 1057, "questionId": 1010, "name": "System.Web.UI.Form", "isAnswer": false }, { "id": 1056, "questionId": 1010, "name": "System.Web.GUI.Page", "isAnswer": false }, { "id": 1058, "questionId": 1010, "name": "System.Web.Form", "isAnswer": false }], "questionType": { "id": 1, "name": "Multiple Choice", "isActive": true } }, { "id": 1013, "name": "What does MVC stand for?", "questionTypeId": 1, "options": [{ "id": 1055, "questionId": 1010, "name": "Model View Controller", "isAnswer": true }, { "id": 1057, "questionId": 1010, "name": "Maximum Virtual Control", "isAnswer": false }, { "id": 1056, "questionId": 1010, "name": "Microsoft Visual Core", "isAnswer": false }, { "id": 1058, "questionId": 1010, "name": "None of the above", "isAnswer": false }], "questionType": { "id": 1, "name": "Multiple Choice", "isActive": true } }, { "id": 1014, "name": "Which of the following does NOT require type casting?", "questionTypeId": 1, "options": [{ "id": 1055, "questionId": 1010, "name": "Session", "isAnswer": false }, { "id": 1057, "questionId": 1010, "name": "TempData", "isAnswer": false }, { "id": 1056, "questionId": 1010, "name": "ViewData", "isAnswer": false }, { "id": 1058, "questionId": 1010, "name": "ViewBag", "isAnswer": true }], "questionType": { "id": 1, "name": "Multiple Choice", "isActive": true } }, { "id": 1015, "name": "Which is the correct order of Page life-cycle in asp.net webform?", "questionTypeId": 1, "options": [{ "id": 1055, "questionId": 1010, "name": "Init, PreRender, Load", "isAnswer": false }, { "id": 1057, "questionId": 1010, "name": "Load, PreRender, Init", "isAnswer": false }, { "id": 1056, "questionId": 1010, "name": "Init, Load, PreRender", "isAnswer": true }, { "id": 1058, "questionId": 1010, "name": "None of the above", "isAnswer": false }], "questionType": { "id": 1, "name": "Multiple Choice", "isActive": true } }, { "id": 1016, "name": "Which of these data source controls do not implement caching?", "questionTypeId": 1, "options": [{ "id": 1055, "questionId": 1010, "name": "ObjectDataSource", "isAnswer": false }, { "id": 1056, "questionId": 1010, "name": "LinqDataSource", "isAnswer": true }, { "id": 1057, "questionId": 1010, "name": "SqlDataSource", "isAnswer": false }, { "id": 1058, "questionId": 1010, "name": "XmlDataSource", "isAnswer": false }], "questionType": { "id": 1, "name": "Multiple Choice", "isActive": true } }, { "id": 1017, "name": "Which tag asp:Label control by default renders to?", "questionTypeId": 1, "options": [{ "id": 1055, "questionId": 1010, "name": "div", "isAnswer": false }, { "id": 1056, "questionId": 1010, "name": "span", "isAnswer": true }, { "id": 1057, "questionId": 1010, "name": "body", "isAnswer": false }, { "id": 1058, "questionId": 1010, "name": "label", "isAnswer": false }], "questionType": { "id": 1, "name": "Multiple Choice", "isActive": true } }, { "id": 1018, "name": "Which method do you use to explicitly kill a user's session?", "questionTypeId": 1, "options": [{ "id": 1055, "questionId": 1010, "name": "Session.Terminate()", "isAnswer": false }, { "id": 1057, "questionId": 1010, "name": "Session.TimeOut()", "isAnswer": false }, { "id": 1056, "questionId": 1010, "name": "Session.Abondon()", "isAnswer": true }, { "id": 1058, "questionId": 1010, "name": "Session.Kill()", "isAnswer": false }], "questionType": { "id": 1, "name": "Multiple Choice", "isActive": true } }, { "id": 1019, "name": "Which of the following object is ideal for keeping data alive for a single request?", "questionTypeId": 1, "options": [{ "id": 1055, "questionId": 1010, "name": "HttpContext", "isAnswer": true }, { "id": 1056, "questionId": 1010, "name": "Session", "isAnswer": false }, { "id": 1057, "questionId": 1010, "name": "Cookies", "isAnswer": false }, { "id": 1058, "questionId": 1010, "name": "SqlServer", "isAnswer": false }], "questionType": { "id": 1, "name": "Multiple Choice", "isActive": true } }, { "id": 1010, "name": "Which of the following assemblies can be stored in Global Assembly Cache?", "questionTypeId": 1, 'options': [{ 'id': 1055, 'questionId': 1010, 'name': 'Private Assemblies', 'isAnswer': false }, { 'id': 1056, 'questionId': 1010, 'name': 'Friend Assemblies', 'isAnswer': false }, { 'id': 1057, 'questionId': 1010, 'name': 'Public Assemblies', 'isAnswer': false }, { 'id': 1058, 'questionId': 1010, 'name': 'Shared Assemblies', 'isAnswer': true }], 'questionType': { 'id': 1, 'name': 'Multiple Choice', 'isActive': true } }, { 'id': 1011, 'name': 'Which of the following .NET components can be used to remove unused references from the managed heap?', 'questionTypeId': 1, 'options': [{ 'id': 1055, 'questionId': 1010, 'name': 'Language Infrastructure', 'isAnswer': false }, { 'id': 1056, 'questionId': 1010, 'name': 'CLR', 'isAnswer': false }, { 'id': 1057, 'questionId': 1010, 'name': 'Garbage Collector', 'isAnswer': true }, { 'id': 1058, 'questionId': 1010, 'name': 'Class Loader', 'isAnswer': false }, { 'id': 1058, 'questionId': 1010, 'name': 'CTS', 'isAnswer': false }], 'questionType': { 'id': 1, 'name': 'Multiple Choice', 'isActive': true } }, { 'id': 1012, 'name': 'Which of the following utilities can be used to compile managed assemblies into processor-specific native code?', 'questionTypeId': 1, 'options': [{ 'id': 1055, 'questionId': 1010, 'name': 'gacutil', 'isAnswer': false }, { 'id': 1057, 'questionId': 1010, 'name': 'ngen', 'isAnswer': true }, { 'id': 1056, 'questionId': 1010, 'name': 'dumpbin', 'isAnswer': false }, { 'id': 1058, 'questionId': 1010, 'name': 'ildasm', 'isAnswer': false }], 'questionType': { 'id': 1, 'name': 'Multiple Choice', 'isActive': true } }, { 'id': 1013, 'name': 'Which of the following is NOT an Arithmetic operator in C#.NET?', 'questionTypeId': 1, 'options': [{ 'id': 1055, 'questionId': 1010, 'name': '** (Double Star)', 'isAnswer': true }, { 'id': 1057, 'questionId': 1010, 'name': '+ (Plus)', 'isAnswer': false }, { 'id': 1056, 'questionId': 1010, 'name': '/ (Divide)', 'isAnswer': false }, { 'id': 1058, 'questionId': 1010, 'name': '% (Modulo)', 'isAnswer': false }], 'questionType': { 'id': 1, 'name': 'Multiple Choice', 'isActive': true } }, { 'id': 1014, 'name': 'Which of the following statements is correct about an interface used in C#.NET?', 'questionTypeId': 1, 'options': [{ 'id': 1055, 'questionId': 1010, 'name': 'If a class implements an interface partially, then it should be an abstract class.', 'isAnswer': true }, { 'id': 1057, 'questionId': 1010, 'name': 'A class cannot implement an interface partially.', 'isAnswer': false }, { 'id': 1056, 'questionId': 1010, 'name': 'An interface can contain static methods.', 'isAnswer': false }, { 'id': 1058, 'questionId': 1010, 'name': 'An interface can contain static data.', 'isAnswer': false }], 'questionType': { 'id': 1, 'name': 'Multiple Choice', 'isActive': true } }, { 'id': 1015, 'name': 'What does the term <strong>immutable</strong> means in term of string objects?', 'questionTypeId': 1, 'options': [{ 'id': 1055, 'questionId': 1010, 'name': 'We can modify characters included in the string', 'isAnswer': false }, { 'id': 1057, 'questionId': 1010, 'name': 'We cannot modify characters contained in the string', 'isAnswer': true }, { 'id': 1056, 'questionId': 1010, 'name': 'We cannot perform various operation of comparison, inserting, appending etc', 'isAnswer': false }, { 'id': 1058, 'questionId': 1010, 'name': 'None of the above', 'isAnswer': false }], 'questionType': { 'id': 1, 'name': 'Multiple Choice', 'isActive': true } }, { 'id': 1016, 'name': 'Which of the following is NOT a .NET Exception class?', 'questionTypeId': 1, 'options': [{ 'id': 1055, 'questionId': 1010, 'name': 'Exception', 'isAnswer': false }, { 'id': 1056, 'questionId': 1010, 'name': 'StackMemoryException', 'isAnswer': true }, { 'id': 1057, 'questionId': 1010, 'name': 'DivideByZeroException', 'isAnswer': false }, { 'id': 1058, 'questionId': 1010, 'name': 'InvalidOperationException', 'isAnswer': false }], 'questionType': { 'id': 1, 'name': 'Multiple Choice', 'isActive': true } }, { 'id': 1017, 'name': 'In C#.NET if we do not catch the exception thrown at runtime then which of the following will catch it?', 'questionTypeId': 1, 'options': [{ 'id': 1055, 'questionId': 1010, 'name': 'Compiler', 'isAnswer': false }, { 'id': 1056, 'questionId': 1010, 'name': 'CLR', 'isAnswer': true }, { 'id': 1057, 'questionId': 1010, 'name': 'Linker', 'isAnswer': false }, { 'id': 1058, 'questionId': 1010, 'name': 'Operating system', 'isAnswer': false }], 'questionType': { 'id': 1, 'name': 'Multiple Choice', 'isActive': true } }, { 'id': 1018, 'name': 'Which of the following statements are correct about delegates?', 'questionTypeId': 1, 'options': [{ 'id': 1055, 'questionId': 1010, 'name': 'Delegates cannot be used to call a static method of a class.', 'isAnswer': false }, { 'id': 1057, 'questionId': 1010, 'name': 'Delegates cannot be used to call procedures that receive variable number of arguments.', 'isAnswer': true }, { 'id': 1056, 'questionId': 1010, 'name': 'If signatures of two methods are same they can be called through the same delegate object.', 'isAnswer': false }, { 'id': 1058, 'questionId': 1010, 'name': 'Delegates cannot be used to call an instance function. Delegates cannot be used to call an instance subroutine.', 'isAnswer': false }], 'questionType': { 'id': 1, 'name': 'Multiple Choice', 'isActive': true } }, { 'id': 1019, 'name': 'Which of the following does NOT represent Integer?', 'questionTypeId': 1, 'options': [{ 'id': 1055, 'questionId': 1010, 'name': 'Char', 'isAnswer': true }, { 'id': 1056, 'questionId': 1010, 'name': 'Byte', 'isAnswer': false }, { 'id': 1057, 'questionId': 1010, 'name': 'Short', 'isAnswer': false }, { 'id': 1058, 'questionId': 1010, 'name': 'Long', 'isAnswer': false }], 'questionType': { 'id': 1, 'name': 'Multiple Choice', 'isActive': true } }, { 'id': 1010, 'name': 'Which of the following assemblies can be stored in Global Assembly Cache?', 'questionTypeId': 1, 'options': [{ 'id': 1055, 'questionId': 1010, 'name': 'Private Assemblies', 'isAnswer': false }, { 'id': 1056, 'questionId': 1010, 'name': 'Friend Assemblies', 'isAnswer': false }, { 'id': 1057, 'questionId': 1010, 'name': 'Public Assemblies', 'isAnswer': false }, { 'id': 1058, 'questionId': 1010, 'name': 'Shared Assemblies', 'isAnswer': true }], 'questionType': { 'id': 1, 'name': 'Multiple Choice', 'isActive': true } }, { 'id': 1011, 'name': 'Which of the following .NET components can be used to remove unused references from the managed heap?', 'questionTypeId': 1, 'options': [{ 'id': 1055, 'questionId': 1010, 'name': 'Language Infrastructure', 'isAnswer': false }, { 'id': 1056, 'questionId': 1010, 'name': 'CLR', 'isAnswer': false }, { 'id': 1057, 'questionId': 1010, 'name': 'Garbage Collector', 'isAnswer': true }, { 'id': 1058, 'questionId': 1010, 'name': 'Class Loader', 'isAnswer': false }, { 'id': 1058, 'questionId': 1010, 'name': 'CTS', 'isAnswer': false }], 'questionType': { 'id': 1, 'name': 'Multiple Choice', 'isActive': true } }, { 'id': 1012, 'name': 'Which of the following utilities can be used to compile managed assemblies into processor-specific native code?', 'questionTypeId': 1, 'options': [{ 'id': 1055, 'questionId': 1010, 'name': 'gacutil', 'isAnswer': false }, { 'id': 1057, 'questionId': 1010, 'name': 'ngen', 'isAnswer': true }, { 'id': 1056, 'questionId': 1010, 'name': 'dumpbin', 'isAnswer': false }, { 'id': 1058, 'questionId': 1010, 'name': 'ildasm', 'isAnswer': false }], 'questionType': { 'id': 1, 'name': 'Multiple Choice', 'isActive': true } }, { 'id': 1013, 'name': 'Which of the following is NOT an Arithmetic operator in C#.NET?', 'questionTypeId': 1, 'options': [{ 'id': 1055, 'questionId': 1010, 'name': '** (Double Star)', 'isAnswer': true }, { 'id': 1057, 'questionId': 1010, 'name': '+ (Plus)', 'isAnswer': false }, { 'id': 1056, 'questionId': 1010, 'name': '/ (Divide)', 'isAnswer': false }, { 'id': 1058, 'questionId': 1010, 'name': '% (Modulo)', 'isAnswer': false }], 'questionType': { 'id': 1, 'name': 'Multiple Choice', 'isActive': true } }, { 'id': 1014, 'name': 'Which of the following statements is correct about an interface used in C#.NET?', 'questionTypeId': 1, 'options': [{ 'id': 1055, 'questionId': 1010, 'name': 'If a class implements an interface partially, then it should be an abstract class.', 'isAnswer': true }, { 'id': 1057, 'questionId': 1010, 'name': 'A class cannot implement an interface partially.', 'isAnswer': false }, { 'id': 1056, 'questionId': 1010, 'name': 'An interface can contain static methods.', 'isAnswer': false }, { 'id': 1058, 'questionId': 1010, 'name': 'An interface can contain static data.', 'isAnswer': false }], 'questionType': { 'id': 1, 'name': 'Multiple Choice', 'isActive': true } }, { 'id': 1015, 'name': 'What does the term <strong>immutable</strong> means in term of string objects?', 'questionTypeId': 1, 'options': [{ 'id': 1055, 'questionId': 1010, 'name': 'We can modify characters included in the string', 'isAnswer': false }, { 'id': 1057, 'questionId': 1010, 'name': 'We cannot modify characters contained in the string', 'isAnswer': true }, { 'id': 1056, 'questionId': 1010, 'name': 'We cannot perform various operation of comparison, inserting, appending etc', 'isAnswer': false }, { 'id': 1058, 'questionId': 1010, 'name': 'None of the above', 'isAnswer': false }], 'questionType': { 'id': 1, 'name': 'Multiple Choice', 'isActive': true } }, { 'id': 1016, 'name': 'Which of the following is NOT a .NET Exception class?', 'questionTypeId': 1, 'options': [{ 'id': 1055, 'questionId': 1010, 'name': 'Exception', 'isAnswer': false }, { 'id': 1056, 'questionId': 1010, 'name': 'StackMemoryException', 'isAnswer': true }, { 'id': 1057, 'questionId': 1010, 'name': 'DivideByZeroException', 'isAnswer': false }, { 'id': 1058, 'questionId': 1010, 'name': 'InvalidOperationException', 'isAnswer': false }], 'questionType': { 'id': 1, 'name': 'Multiple Choice', 'isActive': true } }, { 'id': 1017, 'name': 'In C#.NET if we do not catch the exception thrown at runtime then which of the following will catch it?', 'questionTypeId': 1, 'options': [{ 'id': 1055, 'questionId': 1010, 'name': 'Compiler', 'isAnswer': false }, { 'id': 1056, 'questionId': 1010, 'name': 'CLR', 'isAnswer': true }, { 'id': 1057, 'questionId': 1010, 'name': 'Linker', 'isAnswer': false }, { 'id': 1058, 'questionId': 1010, 'name': 'Operating system', 'isAnswer': false }], 'questionType': { 'id': 1, 'name': 'Multiple Choice', 'isActive': true } }, { 'id': 1018, 'name': 'Which of the following statements are correct about delegates?', 'questionTypeId': 1, 'options': [{ 'id': 1055, 'questionId': 1010, 'name': 'Delegates cannot be used to call a static method of a class.', 'isAnswer': false }, { 'id': 1057, 'questionId': 1010, 'name': 'Delegates cannot be used to call procedures that receive variable number of arguments.', 'isAnswer': true }, { 'id': 1056, 'questionId': 1010, 'name': 'If signatures of two methods are same they can be called through the same delegate object.', 'isAnswer': false }, { 'id': 1058, 'questionId': 1010, 'name': 'Delegates cannot be used to call an instance function. Delegates cannot be used to call an instance subroutine.', 'isAnswer': false }], 'questionType': { 'id': 1, 'name': 'Multiple Choice', 'isActive': true } }, { 'id': 1019, 'name': 'Which of the following does NOT represent Integer?', 'questionTypeId': 1, 'options': [{ 'id': 1055, 'questionId': 1010, 'name': 'Char', 'isAnswer': true }, { 'id': 1056, 'questionId': 1010, 'name': 'Byte', 'isAnswer': false }, { 'id': 1057, 'questionId': 1010, 'name': 'Short', 'isAnswer': false }, { 'id': 1058, 'questionId': 1010, 'name': 'Long', 'isAnswer': false }], 'questionType': { 'id': 1, 'name': 'Multiple Choice', 'isActive': true } }, { 'id': 1011, 'name': 'Which of the following .NET components can be used to remove unused references from the managed heap?', 'questionTypeId': 1, 'options': [{ 'id': 1055, 'questionId': 1010, 'name': 'Language Infrastructure', 'isAnswer': false }, { 'id': 1056, 'questionId': 1010, 'name': 'CLR', 'isAnswer': false }, { 'id': 1057, 'questionId': 1010, 'name': 'Garbage Collector', 'isAnswer': true }, { 'id': 1058, 'questionId': 1010, 'name': 'Class Loader', 'isAnswer': false }, { 'id': 1058, 'questionId': 1010, 'name': 'CTS', 'isAnswer': false }], 'questionType': { 'id': 1, 'name': 'Multiple Choice', 'isActive': true } }, { 'id': 1012, 'name': 'Which of the following utilities can be used to compile managed assemblies into processor-specific native code?', 'questionTypeId': 1, 'options': [{ 'id': 1055, 'questionId': 1010, 'name': 'gacutil', 'isAnswer': false }, { 'id': 1057, 'questionId': 1010, 'name': 'ngen', 'isAnswer': true }, { 'id': 1056, 'questionId': 1010, 'name': 'dumpbin', 'isAnswer': false }, { 'id': 1058, 'questionId': 1010, 'name': 'ildasm', 'isAnswer': false }], 'questionType': { 'id': 1, 'name': 'Multiple Choice', 'isActive': true } }, { 'id': 1013, 'name': 'Which of the following is NOT an Arithmetic operator in C#.NET?', 'questionTypeId': 1, 'options': [{ 'id': 1055, 'questionId': 1010, 'name': '** (Double Star)', 'isAnswer': true }, { 'id': 1057, 'questionId': 1010, 'name': '+ (Plus)', 'isAnswer': false }, { 'id': 1056, 'questionId': 1010, 'name': '/ (Divide)', 'isAnswer': false }, { 'id': 1058, 'questionId': 1010, 'name': '% (Modulo)', 'isAnswer': false }], 'questionType': { 'id': 1, 'name': 'Multiple Choice', 'isActive': true } }, { 'id': 1014, 'name': 'Which of the following statements is correct about an interface used in C#.NET?', 'questionTypeId': 1, 'options': [{ 'id': 1055, 'questionId': 1010, 'name': 'If a class implements an interface partially, then it should be an abstract class.', 'isAnswer': true }, { 'id': 1057, 'questionId': 1010, 'name': 'A class cannot implement an interface partially.', 'isAnswer': false }, { 'id': 1056, 'questionId': 1010, 'name': 'An interface can contain static methods.', 'isAnswer': false }, { 'id': 1058, 'questionId': 1010, 'name': 'An interface can contain static data.', 'isAnswer': false }], 'questionType': { 'id': 1, 'name': 'Multiple Choice', 'isActive': true } }, { 'id': 1015, 'name': 'What does the term <strong>immutable</strong> means in term of string objects?', 'questionTypeId': 1, 'options': [{ 'id': 1055, 'questionId': 1010, 'name': 'We can modify characters included in the string', 'isAnswer': false }, { 'id': 1057, 'questionId': 1010, 'name': 'We cannot modify characters contained in the string', 'isAnswer': true }, { 'id': 1056, 'questionId': 1010, 'name': 'We cannot perform various operation of comparison, inserting, appending etc', 'isAnswer': false }, { 'id': 1058, 'questionId': 1010, 'name': 'None of the above', 'isAnswer': false }], 'questionType': { 'id': 1, 'name': 'Multiple Choice', 'isActive': true } }, { 'id': 1016, 'name': 'Which of the following is NOT a .NET Exception class?', 'questionTypeId': 1, 'options': [{ 'id': 1055, 'questionId': 1010, 'name': 'Exception', 'isAnswer': false }, { 'id': 1056, 'questionId': 1010, 'name': 'StackMemoryException', 'isAnswer': true }, { 'id': 1057, 'questionId': 1010, 'name': 'DivideByZeroException', 'isAnswer': false }, { 'id': 1058, 'questionId': 1010, 'name': 'InvalidOperationException', 'isAnswer': false }], 'questionType': { 'id': 1, 'name': 'Multiple Choice', 'isActive': true } }, { 'id': 1019, 'name': 'Which of the following does NOT represent Integer?', 'questionTypeId': 1, 'options': [{ 'id': 1055, 'questionId': 1010, 'name': 'Char', 'isAnswer': true }, { 'id': 1056, 'questionId': 1010, 'name': 'Byte', 'isAnswer': false }, { 'id': 1057, 'questionId': 1010, 'name': 'Short', 'isAnswer': false }, { 'id': 1058, 'questionId': 1010, 'name': 'Long', 'isAnswer': false }], 'questionType': { 'id': 1, 'name': 'Multiple Choice', 'isActive': true } }, { 'id': 1017, 'name': 'In C#.NET if we do not catch the exception thrown at runtime then which of the following will catch it?', 'questionTypeId': 1, 'options': [{ 'id': 1055, 'questionId': 1010, 'name': 'Compiler', 'isAnswer': false }, { 'id': 1056, 'questionId': 1010, 'name': 'CLR', 'isAnswer': true }, { 'id': 1057, 'questionId': 1010, 'name': 'Linker', 'isAnswer': false }, { 'id': 1058, 'questionId': 1010, 'name': 'Operating system', 'isAnswer': false }], 'questionType': { 'id': 1, 'name': 'Multiple Choice', 'isActive': true } }, { 'id': 1018, 'name': 'Which of the following statements are correct about delegates?', 'questionTypeId': 1, 'options': [{ 'id': 1055, 'questionId': 1010, 'name': 'Delegates cannot be used to call a static method of a class.', 'isAnswer': false }, { 'id': 1057, 'questionId': 1010, 'name': 'Delegates cannot be used to call procedures that receive variable number of arguments.', 'isAnswer': true }, { 'id': 1056, 'questionId': 1010, 'name': 'If signatures of two methods are same they can be called through the same delegate object.', 'isAnswer': false }, { 'id': 1058, 'questionId': 1010, 'name': 'Delegates cannot be used to call an instance function. Delegates cannot be used to call an instance subroutine.', 'isAnswer': false }], 'questionType': { 'id': 1, 'name': 'Multiple Choice', 'isActive': true } }, { 'id': 1019, 'name': 'Which of the following does NOT represent Integer?', 'questionTypeId': 1, 'options': [{ 'id': 1055, 'questionId': 1010, 'name': 'Char', 'isAnswer': true }, { 'id': 1056, 'questionId': 1010, 'name': 'Byte', 'isAnswer': false }, { 'id': 1057, 'questionId': 1010, 'name': 'Short', 'isAnswer': false }, { 'id': 1058, 'questionId': 1010, 'name': 'Long', 'isAnswer': false }], 'questionType': { 'id': 1, 'name': 'Multiple Choice', 'isActive': true } }
      ]
    }
  ];
  quizes: any[];
  quiz: Quiz = new Quiz(null);
  mode = 'quiz';
  quizName: string;
  config: QuizConfig = {
    'allowBack': true,
    'allowReview': true,
    'autoMove': false,  // if true, it will move to next question automatically when answered.
    'duration': 1200,  // indicates the time (in secs) in which quiz needs to be completed. 0 means unlimited.
    'pageSize': 1,
    'requiredAll': false,  // indicates if you must answer all the questions before submitting.
    'richText': false,
    'shuffleQuestions': false,
    'shuffleOptions': false,
    'showClock': false,
    'showPager': true,
    'theme': 'none'
  };

  pager = {
    index: 0,
    size: 1,
    count: 1
  };
  timer: any = null;
  startTime: Date;
  endTime: Date;
  ellapsedTime = '00:00';
  duration = '';
  responseanswer: any;


  title = 'cognilearn';

  type = 'checkbox';

  // tslint:disable-next-line:max-line-length
  constructor(private quizService: ExitAssesmentService, private router: Router, private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.quizService.test().subscribe(data => {
      console.log(data);
    });
    /*
    $(document).ready(function () {
      countdown(2);
    });*/

    // this.el.nativeElement.style.color = 'blue';
    // this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
    this.renderer.setStyle(this.elementRef.nativeElement.ownerDocument.body, 'background-color', 'white');
    // this.quizes = this.quizService.getAll();
    // this.quizName = this.quizes[0].id;
    // this.loadQuiz(this.quizName);
    this.loadQuiz(this.json);

  }
  /****** Using service******************
    loadQuiz(quizName: string) {
      this.quizService.get(quizName).subscribe(res => {
        this.quiz = new Quiz(res);
        this.pager.count = this.quiz.questions.length;
        this.startTime = new Date();
        this.timer = setInterval(() => { this.tick(); }, 1000);
        this.duration = this.parseTime(this.config.duration);
      });
      this.mode = 'quiz';
    }
  */

  // Without Service
  loadQuiz(json) {
    json.forEach(res => {
      this.quiz = new Quiz(res);
      this.pager.count = this.quiz.questions.length;
      this.startTime = new Date();
      this.timer = setInterval(() => { this.tick(); }, 1000);
      this.duration = this.parseTime(this.config.duration);
    });
    this.mode = 'quiz';
  }

  tick() {
    const now = new Date();
    const diff = (now.getTime() - this.startTime.getTime()) / 1000;
    if (diff >= this.config.duration) {
      this.onSubmit();
    }
    this.ellapsedTime = this.parseTime(diff);
  }

  parseTime(totalSeconds: number) {
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    return `${mins}:${secs}`;
  }

  get filteredQuestions() {
    return (this.quiz.questions) ?
      this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  onSelect(question: Question, option: Option) {
    if (question.questionTypeId === 1) {
      question.options.forEach((x) => {
        if (x.id !== option.id) {
          console.log('option ' + option.id + ' x.id : ' + x.id);
          x.selected = false;
          console.log('inside on Select selected : ' + x.selected);
        }
      });
    }

    if (this.config.autoMove) {
      this.goTo(this.pager.index + 1);
    }
  }

  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'quiz';
    }
  }


  isAnswered(question: Question) {
    return question.options.find(x => x.selected) ? 'Answered' : 'Not Answered';
  };



  isCorrect(question: Question) {
    return question.options.every(x => x.selected === x.isAnswer) ? 'correct' : 'wrong';
  };

  onSubmit() {
    let answers = [];
    this.quiz.questions.forEach(x => answers.push({ 'quizId': this.quiz.id, 'questionId': x.id, 'answered': x.answered }));

    // Post your data to the server here. answers contains the questionId and the users' answer.
    console.log(this.quiz.questions);
    this.mode = 'result';
    this.router.navigate(['/assesmentscore']);

  }

  ngOnDestroy() {
    // this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'red';
    this.renderer.setStyle(this.elementRef.nativeElement.ownerDocument.body, 'background-color', '#989D9E');
  }



}
