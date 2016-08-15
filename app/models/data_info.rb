# == Schema Information
#
# Table name: data_infos
#
#  id                         :integer          not null, primary key
#  user_id                    :integer
#  title                      :string
#  description                :text

#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class DataInfo < ActiveRecord::Base
  belongs_to :user
  has_many :data_info_users
  def invites
    self.data_info_users
  end
end
