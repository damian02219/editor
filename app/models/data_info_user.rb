# == Schema Information
#
# Table name: data_info_users
#
#  id                         :integer          not null, primary key
#  email                      :string
#  data_info_id               :integer
#  permission                 :string

#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class DataInfoUser < ActiveRecord::Base
  belongs_to :user
  belongs_to :data_info

  extend Enumerize
  enumerize :permission, in: [:read, :write]
end
