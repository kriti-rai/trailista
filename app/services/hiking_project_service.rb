class HikingProjectService

  def get_hikes
    resp = Faraday.get 'https://www.hikingproject.com/data/get-trails?' do |req|
      req.params['lat'] = 40.0274
      req.params['lon'] = -105.2519
      req.params['maxDistance'] = 10
      req.params['key'] = '200433706-b893b66d00841f18007905dd3d568c32'
    end

    JSON.parse(resp.body)["trails"]

  end


end
