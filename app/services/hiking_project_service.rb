class HikingProjectService

  def get_hikes
    resp = Faraday.get 'https://www.hikingproject.com/data/get-trails?' do |req|
      req.params['lat'] = 40.0274   #these are default coordinates for Boulder,CO
      req.params['lon'] = -105.2519
      req.params['maxDistance'] = 10
      req.params['key'] = ENV["REACT_APP_HIKING_PROJECT_API_KEY"]
    end

    JSON.parse(resp.body)["trails"]

  end


end
