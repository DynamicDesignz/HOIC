defmodule HoicWeb.PageController do
  use HoicWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
