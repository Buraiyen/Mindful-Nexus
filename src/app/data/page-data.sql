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
  ('psychology-of-money',
   'Psychology of Money',
   '2020-09-08',
   'book',
   ARRAY['"The Psychology of Money" is a book by Morgan Housel that explores the complex relationship between people and money. The book focuses on the psychology and behavior of individuals, rather than financial theory or investment strategies. It examines the various ways that people think about money, and how these beliefs and behaviors impact their financial decisions'],
   'https://www.amazon.com/Psychology-Money-Timeless-Lessons-Happiness/dp/B08D9WJ9G8/ref=sr_1_1?crid=1X5IUGMH00DRM&keywords=the+psychology+of+money+morgan+housel&qid=1683402314&sprefix=psycholoig%2Caps%2C203&sr=8-1'),
  
  ('consider-before-consuming',
   'Consider Before Consuming',
   '2019-09-05',
   'podcast',
   ARRAY['Consider Before Consuming is a podcast from "Fight the New Drug," a non-profit organization that aims to raise awareness about the harmful effects of pornography and help individuals to break free from addiction.',
   'The podcast features interviews with experts in the fields of psychology, addiction recovery, and social science, as well as personal stories from individuals who have struggled with pornography addiction. The episodes cover a range of topics related to pornography, including its impact on the brain, the ways it can harm relationships, and the challenges of breaking free from addiction'],
   'https://considerbeforeconsumingpodcast.com/'),
  
  ('required-for-success',
   '"What is Actually Required for Success?" by James Clear',
   '2019-01-01',
   'article',
   ARRAY['The author of this article shares a story about a weightlifter who achieved great success despite using old, worn-out shoes. The message is that we often waste time obsessing over small details and seeking perfection, when what truly matters is doing the work and mastering the fundamentals.',
   'The key to success lies in taking action, rather than relying on external factors or excuses. You don''t need fancy equipment or credentials; all you need is determination, consistency, and willingness to put in the effort.'],
   'https://jamesclear.com/required-for-success/'),
   
   ('tidying-up-marie-kond',
   'Tidying Up With Marie Kondo',
   '2019-01-01',
   'video',
   ARRAY['In a series of inspiring home makeovers, world-renowned tidying expert Marie Kondo helps clients clear out the clutter -- and choose joy.',
   'The KonMari method emphasizes the idea of keeping only items that spark joy and letting go of possessions that no longer serve a purpose. Marie Kondo guides individuals and families through a process of categorizing their belongings and making deliberate decisions about what to keep and what to discard. The show showcases the transformative impact of decluttering and organizing lives, promoting a sense of order, mindfulness, and gratitude for the things that truly matter.'],
   'https://jamesclear.com/required-for-success/'),
  
  ('down-dog-yoga',
   'Down Dog',
   '2013-01-01',
   'tool',
   ARRAY['The Down Dog app is a popular mobile application that offers a variety of yoga practices and other workout routines for all levels of practitioners. It provides customizeable workouts that you can tailor to your preferences and goals.'],
   'https://www.downdogapp.com/');
