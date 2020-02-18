# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

course = Course.create(title: "Hello World", description: "Create a react app with RoR")
section = Section.create(title: "Chapter 1", course: course)
episodes = Episode.create([
    {
			title: '1. Setting up a new ROR app with React',
			description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			url: 'https://www.youtube.com/embed/B0SxxHAImhc',
			section: section
    },
    {
			title: '2. Adding react to an existing rails app',
			description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			url: 'https://www.youtube.com/embed/B0SxxHAImhc',
			section: section
    },
    {
			title: '3. Building a hello world app',
			description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			url: 'https://www.youtube.com/embed/B0SxxHAImhc',
			section: section
    },
    {
			title: '4. Adding React Router Dom to your App',
			description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			url: 'https://www.youtube.com/embed/B0SxxHAImhc',
			section: section
    }
]) 