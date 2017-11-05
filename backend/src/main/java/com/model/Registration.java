package com.model;

import javax.persistence.Column;

//import java.util.HashSet;
//import java.util.Set;

//import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.Id;
//import javax.persistence.JoinTable;
//import javax.persistence.OneToMany;
import javax.persistence.Table;
import com.model.Event;
import com.model.User;


@Entity
@Table(name = "registration")
public class Registration {
	
	@Id
	@GeneratedValue(strategy = GenerationType.TABLE)
	@Column(name = "registration_id")
	private Integer registration_id;
	private Integer revent_id;
	private String ruser_id;
	public Integer getRegistration_id() {
		return registration_id;
	}
	public void setRegistration_id(Integer registration_id) {
		this.registration_id = registration_id;
	}
	public Integer getRevent_id() {
		return revent_id;
	}
	public void setRevent_id(Integer revent_id) {
		this.revent_id = revent_id;
	}
	public String getRuser_id() {
		return ruser_id;
	}
	public void setRuser_id(String ruser_id) {
		this.ruser_id = ruser_id;
	}
	
	public Registration(Integer registration_id, Integer revent_id, String ruser_id) {
		super();
		this.registration_id = registration_id;
		this.revent_id = revent_id;
		this.ruser_id = ruser_id;
	}
	
	public Registration() { }
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((registration_id == null) ? 0 : registration_id.hashCode());
		result = prime * result + ((revent_id == null) ? 0 : revent_id.hashCode());
		result = prime * result + ((ruser_id == null) ? 0 : ruser_id.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Registration other = (Registration) obj;
		if (registration_id == null) {
			if (other.registration_id != null)
				return false;
		} else if (!registration_id.equals(other.registration_id))
			return false;
		if (revent_id == null) {
			if (other.revent_id != null)
				return false;
		} else if (!revent_id.equals(other.revent_id))
			return false;
		if (ruser_id == null) {
			if (other.ruser_id != null)
				return false;
		} else if (!ruser_id.equals(other.ruser_id))
			return false;
		return true;
	}
	
}
