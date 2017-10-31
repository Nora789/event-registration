package com.model;

import javax.persistence.EmbeddedId;

//import java.util.HashSet;
//import java.util.Set;

//import javax.persistence.Column;
import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
//import javax.persistence.JoinTable;
//import javax.persistence.OneToMany;
import javax.persistence.Table;
import com.model.Event;
import com.model.User;


@Entity
@Table(name = "registration_e")
public class Registration {
	
	@EmbeddedId
	private RegistrationId id;

	public RegistrationId getId() {
		return id;
	}

	public void setId(RegistrationId id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "Registration [id=" + id + "]";
	}
	
}
