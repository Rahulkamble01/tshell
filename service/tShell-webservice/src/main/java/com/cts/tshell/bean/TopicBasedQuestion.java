package com.cts.tshell.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="topic_question")
public class TopicBasedQuestion {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="tq_id")
	private int id;
	
	@Column(name="tq_tp_id")
	private Topic topic;
	
	@Column(name="tq_qu_id")
	private Question question;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Topic getTopic() {
		return topic;
	}

	public void setTopic(Topic topic) {
		this.topic = topic;
	}

	public Question getQuestion() {
		return question;
	}

	public void setQuestion(Question question) {
		this.question = question;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("TopicBasedQuestion [id=");
		builder.append(id);
		builder.append(", topic=");
		builder.append(topic);
		builder.append(", question=");
		builder.append(question);
		builder.append("]");
		return builder.toString();
	}
	
	
}
