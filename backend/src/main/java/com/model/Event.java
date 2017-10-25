package com.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;


import javax.persistence.JoinColumn;

//This is a @Entity model
@Entity
@Table(name = "event")
public class Event {
	@Id
	@GeneratedValue(strategy = GenerationType.TABLE)
	@Column(name = "event_id")
	private Integer event_id;
	private String creator_id;
	private String event_name;
	private String event_type;
	private String dress_code;
	private String description;
	private String date;
	private String address;
	private String start_time;
	private String end_time;
	
	@ManyToMany
	@JoinTable(name = "registration", 
			joinColumns = @JoinColumn(name = "revent_id", referencedColumnName = "event_id"), 
			inverseJoinColumns = @JoinColumn(name = "ruser_id", referencedColumnName = "user_id"))
	private Set<User> user = new HashSet<User>();
	
	
	public Integer getEvent_id() {
		return event_id;
	}


	public void setEvent_id(Integer event_id) {
		this.event_id = event_id;
	}


	public String getCreator_id() {
		return creator_id;
	}


	public void setCreator_id(String creator_id) {
		this.creator_id = creator_id;
	}


	public String getEvent_name() {
		return event_name;
	}


	public void setEvent_name(String event_name) {
		this.event_name = event_name;
	}


	public String getEvent_type() {
		return event_type;
	}


	public void setEvent_type(String event_type) {
		this.event_type = event_type;
	}


	public String getDress_code() {
		return dress_code;
	}


	public void setDress_code(String dress_code) {
		this.dress_code = dress_code;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public String getDate() {
		return date;
	}


	public void setDate(String date) {
		this.date = date;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}
	
	public Set<User> getUser() {
		return user;
	}

	public void setUser(Set<User> user) {
		this.user = user;
	}
	


	public String getStart_time() {
		return start_time;
	}


	public void setStart_time(String start_time) {
		this.start_time = start_time;
	}


	public String getEnd_time() {
		return end_time;
	}


	public void setEnd_time(String end_time) {
		this.end_time = end_time;
	}


	public Event(Integer event_id, String creator_id, String event_name, String event_type, String dress_code,
			String description, String date, String address, String start_time, String end_time) {
		super();
		this.event_id = event_id;
		this.creator_id = creator_id;
		this.event_name = event_name;
		this.event_type = event_type;
		this.dress_code = dress_code;
		this.description = description;
		this.date = date;
		this.address = address;
		this.start_time = start_time;
		this.end_time = end_time;
		
	}


	public Event() { }
}
