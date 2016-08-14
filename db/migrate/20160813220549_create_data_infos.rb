class CreateDataInfos < ActiveRecord::Migration
  def change
    create_table :data_infos do |t|
      t.integer :user_id
      t.string :title
      t.text :description

      t.timestamps null: false
    end
  end
end
