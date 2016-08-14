module ApplicationHelper
  def log_in(user)
    session[:user_id] = user.id
  end
  def log_out(user)
    session[:user_id] = nil
  end
  def current_user
    @current_user ||= User.find_by(id:session[:user_id])
  end

  def authenticate_user!
    redirect_to signin_url, :error => "You must be logged in to use this page." if current_user.nil?
  end
end
