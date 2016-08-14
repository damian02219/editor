# == Schema Information
#
# Table name: users
#
#  id                     :uuid          not null, primary key
#  name                   :string
#  email                  :string

#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class User < ActiveRecord::Base
  has_many :data_infos

  def all_data_info
  end
end
