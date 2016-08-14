class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_or_create_by(email:params[:user][:email])
    log_in(user)
    redirect_to root_url
  end

  def destroy
    log_out(current_user)
  end
end
