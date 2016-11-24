class CreateSkills < ActiveRecord::Migration[5.0]
  def change
    create_table :skills do |t|
      t.text :name
      t.text :details
      t.integer :level, default: 0

      t.timestamps
    end
  end
end
