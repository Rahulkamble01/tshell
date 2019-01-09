package com.cts.tshell.rest;

import java.io.BufferedWriter;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.multipart.MultipartFile;

import com.cts.tshell.bean.Question;
import com.cts.tshell.bean.Topic;
import com.cts.tshell.service.QuestionService;
import com.opencsv.CSVWriter;

@SessionAttributes("questionsList")
@RestController
@RequestMapping("/question")
public class QuestionController {
	private static final Logger LOGGER = LoggerFactory.getLogger(QuestionController.class);
	private QuestionService questionService;

	@Autowired
	public void setQuestionService(QuestionService questionService) {
		this.questionService = questionService;
	}

	// Creating template wrt to skillId
	@GetMapping("/template/{skillId}")
	public void createTemplate(@PathVariable int skillId, HttpServletResponse response) throws IOException {
		LOGGER.info("createTemplate() is called");
		List<Topic> topics = questionService.getNamesOfTopics(skillId);
		String[] array = topics.toArray(new String[0]);
		response.setContentType("text/csv");
		response.setHeader("Content-Disposition", "attachment; fileName=Question_Bank_Template.csv");
		Writer writer = new BufferedWriter(new OutputStreamWriter(response.getOutputStream()));
		@SuppressWarnings("resource")
		CSVWriter csvWriter = new CSVWriter(writer, CSVWriter.DEFAULT_SEPARATOR, CSVWriter.NO_QUOTE_CHARACTER,
				CSVWriter.DEFAULT_ESCAPE_CHARACTER, CSVWriter.DEFAULT_LINE_END);
		String[] heading = { "Topic", "Question", "Option 1", "Option 1 is answer?", "Option 2", "Option 2 is answer?",
				"Option 3", "Option 3 is answer?", "Option 4", "Option 4 is answer?", "Option 5",
				"Option 5 is answer?", };
		for (int i = 0; i < 11; i++) {
			if (i == 0 || i == 10) {
				csvWriter.writeNext(new String[] { "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#" });
			} else if (i == 3) {
				csvWriter.writeNext(new String[] { "#", "", "Use the below values for Topics", "", "", "", "", "", "",
						"", "", "#" });
				Arrays.toString(array);
				csvWriter.writeNext(new String[] { "#", "" + String.join("              ", array) + "", "", "", "", "",
						"", "", "", "", "", "#" });

			} else {
				csvWriter.writeNext(new String[] { "#", "", "", "", "", "", "", "", "", "", "", "#" });
			}
		}
		
		csvWriter.writeNext(heading);
		writer.flush();
		csvWriter.close();
		writer.close();
		LOGGER.info("createTemplate() execution is completed!");
	}

	// Uploading csv file
	@PostMapping("/upload")
	public List<Question> uploadFile(@RequestParam("file") MultipartFile file, ModelMap model,
			HttpServletRequest request) {
		LOGGER.info("uploadFile() is called");
		LOGGER.debug("Content type is {}", file.getContentType());
		request.getSession(true);
		List<Question> questionsList = new ArrayList<Question>();
		questionsList = questionService.readFile(file);
		LOGGER.info("uploadFile() execution is completed!");
		model.addAttribute("questionsList", questionsList);
		return questionsList;
	}

	// Submitting Questions for Reviewing
	@PostMapping("/submitforreview")
	public void submitForReview(ModelMap model) {
		LOGGER.info("submitForReview() is called");
		List<Question> questions = (List<Question>) model.get("questionsList");
		questionService.saveQuestionsForReview(questions);
		LOGGER.info("submitForReview() execution is completed!");
	}

	// Submitting Questions as Approved
	@PostMapping("/approveandsubmit")
	public void submitAsApproved(ModelMap model) {
		LOGGER.info("submitAsApproved() is called");
		List<Question> questions = (List<Question>) model.get("questionsList");
		questionService.saveQuestionsAsApproved(questions);
		LOGGER.info("submitAsApproved() execution is completed!");
	}
}
