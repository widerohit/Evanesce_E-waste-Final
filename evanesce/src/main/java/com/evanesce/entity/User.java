package com.evanesce.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;

import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@ToString
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class User {
	
	@Id
	private String email;
	private String password;
	private String name;
	private String city;
	private String phone;
	private String securityQues;
	private String securityAns;
	private String role;
	
    @OneToMany(mappedBy = "email", cascade = CascadeType.ALL)
    private List<Request> request ;
	
}