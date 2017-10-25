package com.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.JoinColumn;


@Entity
@Table(name = "user")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.TABLE)
	@Column(name = "user_id")
	private String user_id;
	private String fname;
	private String lname;
	private String email;
	
	@ManyToMany(cascade = CascadeType.ALL)
	@JsonBackReference
	@JoinTable(name = "registration", 
			joinColumns = @JoinColumn(name = "ruser_id", referencedColumnName = "user_id"), 
			inverseJoinColumns = @JoinColumn(name = "revent_id", referencedColumnName = "event_id"))
	private Set<Event> event = new HashSet<Event>();
	
	
	public User() { }
	

	public User(String user_id, String fname, String lname, String email) {
		super();
		this.user_id = user_id;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
	}

	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}


	public Set<Event> getEvent() {
		return event;
	}


	public void setEvent(Set<Event> event) {
		this.event = event;
	}
	
}
