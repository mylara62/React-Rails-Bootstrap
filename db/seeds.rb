# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

class Seed
  attr_reader :seed
  def initialize
    @seed
  end

  def run
    generate_skills
  end

  def generate_skills
    10.times do
      skill = Skill.new
      skill.name = Faker::Lorem.word
      skill.details = Faker::Lorem.sentence(100)
      skill.level = [0, 1, 2].sample
      skill.save!
      puts "Generated skill # #{skill.id}"
    end
  end
end

seed = Seed.new
seed.run
