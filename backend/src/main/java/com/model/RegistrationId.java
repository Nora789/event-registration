package com.model;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class RegistrationId implements Serializable {
	@Column(name = "revent_id") Integer revent_id;
	
	@Column(name = "ruser_id") String ruser_id;
	
	public RegistrationId() { }

	public RegistrationId(Integer revent_id, String ruser_id) {
		super();
		this.revent_id = revent_id;
		this.ruser_id = ruser_id;
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
	
	@Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof RegistrationId)) return false;
        RegistrationId that = (RegistrationId) o;
        return Objects.equals(getRevent_id(), that.getRevent_id()) &&
                Objects.equals(getRuser_id(), that.getRuser_id());
    }
 
    @Override
    public int hashCode() {
        return Objects.hash(getRevent_id(),getRuser_id());
    }

	@Override
	public String toString() {
		return revent_id + "_" + ruser_id;
	}
    
}