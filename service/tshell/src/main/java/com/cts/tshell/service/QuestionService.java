package com.cts.tshell.service;

import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.cts.tshell.bean.Option;
import com.cts.tshell.bean.Question;
import com.cts.tshell.bean.Topic;
import com.cts.tshell.repository.QuestionRepository;
import com.opencsv.CSVReader;
import com.opencsv.CSVReaderBuilder;

@Service
public class QuestionService {

	private static final Logger LOGGER = LoggerFactory.getLogger(QuestionService.class);

	private QuestionRepository questionRepository;

	@Autowired
	public void setQuestionRepository(QuestionRepository questionRepository) {
		this.questionRepository = questionRepository;
	}

	public List<Question> readFile(MultipartFile file) {

		LOGGER.info("readFile() is called!");
		List<Question> uploadedQuestions = new ArrayList<Question>();
		// Reading file using InputStreamReader..
		try {
			InputStreamReader reader = new InputStreamReader(file.getInputStream());

			CSVReader csvReader = new CSVReaderBuilder(reader).withSkipLines(12).build();

			List<String[]> csvData = csvReader.readAll();

			for (String questionData[] : csvData) {

				Question question = new Question(questionData);
				uploadedQuestions.add(question);
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		LOGGER.info("readFile() execution is completed!");
		return uploadedQuestions;
	}

}
