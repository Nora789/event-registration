CREATE DATABASE `event` /*!40100 DEFAULT CHARACTER SET latin1 */;

CREATE TABLE `user` (
  `user_id` varchar(100) NOT NULL,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `userId_UNIQUE` (`user_id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `event` (
  `event_id` int(11) NOT NULL,
  `creator_id` varchar(100) NOT NULL,
  `event_name` varchar(200) NOT NULL,
  `event_type` varchar(100) NOT NULL,
  `dress_code` varchar(45) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `date` varchar(45) NOT NULL,
  `address` varchar(100) NOT NULL,
  `start_time` varchar(45) NOT NULL,
  `end_time` varchar(45) NOT NULL,
  PRIMARY KEY (`event_id`),
  UNIQUE KEY `eventId_UNIQUE` (`event_id`),
  KEY `creatorId_idx` (`creator_id`),
  CONSTRAINT `creator_id` FOREIGN KEY (`creator_id`) REFERENCES `user` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `registration` (
  `revent_id` int(11) NOT NULL,
  `ruser_id` varchar(100) NOT NULL,
  PRIMARY KEY (`revent_id`,`ruser_id`),
  KEY `ruserId_idx` (`ruser_id`),
  CONSTRAINT `FK2hbjcub3d853vrt7mgijfidv8` FOREIGN KEY (`ruser_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `FKovun8x99xiq63xx879e13df3a` FOREIGN KEY (`revent_id`) REFERENCES `event` (`event_id`),
  CONSTRAINT `revent_id` FOREIGN KEY (`revent_id`) REFERENCES `event` (`event_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `ruser_id` FOREIGN KEY (`ruser_id`) REFERENCES `user` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;