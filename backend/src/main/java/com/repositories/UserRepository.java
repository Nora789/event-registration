package com.repositories;

import java.io.Serializable;
import org.springframework.data.repository.CrudRepository;
import com.model.User;

public interface UserRepository extends CrudRepository<User, Serializable> {
	
}
