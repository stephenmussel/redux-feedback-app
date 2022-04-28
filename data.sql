-- Database should be prime_feedback_practice
CREATE DATABASE "redux_feedback_app";

-- Switch to "prime_feedback_practice" before making:
-- Table to store the feedback
CREATE TABLE "feedback" (
  "id" serial primary key,
  "feeling" INT not null,
  "understanding" INT not null,
  "support" INT not null,
  "comments" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
); 

-- Sample feedback item
INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
VALUES 
  (4, 4, 5, 'Doing Great!'),
  (5, 4, 3, 'AOK'),
  (1, 2, 3, 'Meh'),
  (3, 4, 3, 'Good'),
  (4, 4, 4, 'Not sure?');
