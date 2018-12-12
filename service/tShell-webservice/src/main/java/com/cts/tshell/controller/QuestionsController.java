package com.cts.tshell.controller;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.List;

import org.apache.commons.io.FilenameUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cts.tshell.service.QuestionService;
import com.opencsv.CSVReader;
import com.opencsv.CSVReaderBuilder;

@RestController
@RequestMapping("/contribute")
public class QuestionsController {
	private final static Logger LOGGER = LoggerFactory.getLogger(QuestionsController.class);
	private QuestionService questionService;

	@Autowired
	public void setQuestionService(QuestionService questionService) {
		this.questionService = questionService;
	}

	@PostMapping("/bulkupload")
	public void processQuestions(@RequestParam("file") MultipartFile file) {
		LOGGER.info("Backend is called!");
		boolean isFlag = false;
		String extension = FilenameUtils.getExtension(file.getOriginalFilename());
		if (extension.equalsIgnoreCase("csv")) {
			System.out.println("File Extension is " + extension);
			try {
				InputStreamReader reader = new InputStreamReader(file.getInputStream());
				CSVReader csvReader = new CSVReaderBuilder(reader).withSkipLines(1).build();
				List<String[]> rows = csvReader.readAll();
				for (String row[] : rows) {
					System.out.println("Question->" + row[0]);
					System.out.println("Option 1-> " + row[1]);
					System.out.println("Option 2-> " + row[2]);
					System.out.println("Option 3-> " + row[3]);
					System.out.println("Option 4-> " + row[4]);
					System.out.println("Option 5-> " + row[5]);
					System.out.println("Answer -> " + row[6]);
				}
			} catch (IOException e) {
				
				e.printStackTrace();
			}
		}

		// FileReader fileReader = null;
		// BufferedReader bufferedReader = null;
		// String line = "";
		// String csvSplitBy = ",";
		// try {
		// fileReader =new FileReader(file);
		// bufferedReader = new BufferedReader(fileReader);
		// line = bufferedReader.readLine();
		// while ((line = bufferedReader.readLine()) != null) {
		// String csvData[] = line.split(csvSplitBy);
		// System.out.println("Question->" + csvData[0]);
		// System.out.println("Option 1-> " + csvData[1]);
		// System.out.println("Option 2-> " + csvData[2]);
		// System.out.println("Option 3-> " + csvData[3]);
		// System.out.println("Option 4-> " + csvData[4]);
		// System.out.println("Option 5-> " + csvData[5]);
		// System.out.println("Answer -> " + csvData[6]);
		// }
		// } catch (FileNotFoundException e) {
		// e.printStackTrace();
		// } catch (IOException e) {
		// e.printStackTrace();
		// } finally {
		// if (bufferedReader != null) {
		// try {
		// bufferedReader.close();
		// } catch (IOException e) {
		// e.printStackTrace();
		// }
		// }
		// if (fileReader != null) {
		// try {
		// fileReader.close();
		// } catch (IOException e) {
		// e.printStackTrace();
		// }
		// }
		// }

	}

}
