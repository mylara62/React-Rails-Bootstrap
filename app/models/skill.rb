class Skill < ApplicationRecord
  validates :name, presence: true

  enum level: [:bad, :halfbad, :fantastic]
end
