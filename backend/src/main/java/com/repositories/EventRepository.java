package com.repositories;

import java.io.Serializable;
import org.springframework.data.repository.CrudRepository;
import com.model.Event;

public interface EventRepository extends CrudRepository<Event, Serializable> {

}
