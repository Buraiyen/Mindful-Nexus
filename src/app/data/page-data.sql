CREATE TABLE page_data (
  page_id VARCHAR(255) primary key,
  title VARCHAR(255),
  date DATE,
  category VARCHAR(255),
  content TEXT[],
  link VARCHAR(255)
);

INSERT INTO page_data (page_id, title, date, category, content, link)
VALUES
  ('psychology-of-money', 'Psychology of Money', '2020-09-08', 'book',
  ARRAY['"The Psychology of Money" is a book by Morgan Housel that explores the complex relationship between people and money. The book focuses on the psychology and behavior of individuals, rather than financial theory or investment strategies. It examines the various ways that people think about money, and how these beliefs and behaviors impact their financial decisions'],
  'https://www.amazon.com/Psychology-Money-Timeless-Lessons-Happiness/dp/B08D9WJ9G8/ref=sr_1_1?crid=1X5IUGMH00DRM&keywords=the+psychology+of+money+morgan+housel&qid=1683402314&sprefix=psycholoig%2Caps%2C203&sr=8-1'),
  
  ('consider-before-consuming', 'Consider Before Consuming', '2019-09-05', 'podcast',
  ARRAY['Consider Before Consuming is a podcast from "Fight the New Drug," a non-profit organization that aims to raise awareness about the harmful effects of pornography and help individuals to break free from addiction.',
  'The podcast features interviews with experts in the fields of psychology, addiction recovery, and social science, as well as personal stories from individuals who have struggled with pornography addiction. The episodes cover a range of topics related to pornography, including its impact on the brain, the ways it can harm relationships, and the challenges of breaking free from addiction'],
  'https://considerbeforeconsumingpodcast.com/');
