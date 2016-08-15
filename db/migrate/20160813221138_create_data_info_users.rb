class CreateDataInfoUsers < ActiveRecord::Migration
  def change
    create_table :data_info_users do |t|
      t.integer :data_info_id
      t.string :email
      t.string :permission
      t.timestamps null: false
    end
  end
end
