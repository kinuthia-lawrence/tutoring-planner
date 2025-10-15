import type {
  User,
  Profile,
  Subject,
  TutorSubject,
  Availability,
  Task,
  StudyPlan,
  AIRequest,
} from "../types/type";

export const users: User[] = [
  {
    user_id: 1,
    email: "alice@example.com",
    password_hash: "hashedpassword1",
    role: "student",
    created_at: "2025-10-01T10:00:00Z",
    verified: true,
  },
  {
    user_id: 2,
    email: "bob@example.com",
    password_hash: "hashedpassword2",
    role: "tutor",
    created_at: "2025-10-02T11:00:00Z",
    verified: true,
  },
];

export const profiles: Profile[] = [
  {
    profile_id: 1,
    user_id: 1,
    display_name: "Alice",
    bio: "Math enthusiast and avid learner.",
    rating: 4.8,
  },
  {
    profile_id: 2,
    user_id: 2,
    display_name: "Bob",
    bio: "Experienced Math tutor.",
    rating: 4.9,
  },
];

export const subjects: Subject[] = [
  {
    subject_id: 1,
    name: "Mathematics",
    code: "MATH101",
  },
  {
    subject_id: 2,
    name: "Physics",
    code: "PHYS101",
  },
];

export const tutorSubjects: TutorSubject[] = [
  {
    tutorsubject_id: 1,
    user_id: 2,
    subject_id: 1,
    hourly_rate: 30,
    specialties: "Algebra, Calculus",
  },
  {
    tutorsubject_id: 2,
    user_id: 2,
    subject_id: 2,
    hourly_rate: 35,
    specialties: "Mechanics",
  },
];

export const availabilities: Availability[] = [
  {
    availability_id: 1,
    user_id: 2,
    start_time: "2025-10-20T09:00:00Z",
    end_date: "2025-10-20T11:00:00Z",
    completion_pct: 0,
  },
  {
    availability_id: 2,
    user_id: 2,
    start_time: "2025-10-21T14:00:00Z",
    end_date: "2025-10-21T16:00:00Z",
    completion_pct: 0,
  },
];

export const tasks: Task[] = [
  {
    review_id: 1,
    session_id: 1,
    author_id: 1,
    target_id: 2,
    rating: 5,
    comment: "Great tutoring session!",
    datetime: "2025-10-20T12:00:00Z",
  },
];

export const studyPlans: StudyPlan[] = [
  {
    plan_id: 1,
    user_id: 1,
    title: "Algebra Mastery",
    due_date: "2025-11-01",
    completed: false,
    progress_pct: 40,
  },
];

export const aiRequests: AIRequest[] = [
  {
    airequest_id: 1,
    user_id: 1,
    // Add more fields as needed
  },
];
