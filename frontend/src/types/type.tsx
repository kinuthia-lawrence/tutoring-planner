// Color palette for this project: white, blue, black, purple (no gradients)
// Author: [Your Last, First Name], Student ID: [Your Student ID]

// USER entity
export interface User {
	user_id: number;
	email: string;
	password_hash: string;
	role: 'student' | 'tutor' | string;
	created_at: string; // ISO datetime string
	verified: boolean;
}

// PROFILE entity
export interface Profile {
	profile_id: number;
	user_id: number;
	display_name: string;
	bio: string;
	rating: number;
}

// SUBJECTS entity
export interface Subject {
	subject_id: number;
	name: string;
	code: string;
}

// TUTORSUBJECT entity (junction table)
export interface TutorSubject {
	tutorsubject_id: number;
	user_id: number;
	subject_id: number;
	hourly_rate: number;
	specialties: string;
}

// AVAILABILITY entity
export interface Availability {
	availability_id: number;
	user_id: number;
	start_time: string; // ISO datetime string
	end_date: string;   // ISO datetime string
	completion_pct: number;
}

// TASK entity (review/task)
export interface Task {
	review_id: number;
	session_id: number;
	author_id: number;
	target_id: number;
	rating: number;
	comment: string;
	datetime: string; // ISO datetime string
}

// STUDYPLAN entity
export interface StudyPlan {
	plan_id: number;
	user_id: number;
	title: string;
	due_date: string; // ISO date string
	completed: boolean;
	progress_pct: number;
}

// AIREQUEST entity
export interface AIRequest {
	airequest_id: number;
	user_id: number;
}
