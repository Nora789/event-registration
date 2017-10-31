package com.repositories;
import java.io.Serializable;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.model.Event;
import com.model.User;
import com.model.Registration;

public interface RegistrationRepository extends CrudRepository<Registration, Serializable> {
	/*
	List<Registration> findByRuser_id(String ruser_id);
	List<Registration> findByRevent_id(Integer revent_id);
	
	@Query("select r.revent_id from Registration r where r.ruser_id = :user_id")
	Stream<Event> findByRuser_idReturnStream(@Param("user_id") String user_id);
	
	@Query("select r.ruser_id from Registration r where r.revent_id = :event_id")
	Stream<User> findByRevent_idReturnStream(@Param("event_id") Integer event_id);*/
}
