class Player < ApplicationRecord
  # for elasticsearch searchbox heroku config:set ELASTICSEARCH_URL=`heroku config:get SEARCHBOX_URL`
  has_one :player_contract, primary_key: 'player_id', foreign_key: 'player_id'
  searchkick

  validates_uniqueness_of :player_id, presence: true

  def self.get_players_from_name_list(list)
    Player.connection.execute('select name, player_id from players where name in ('+list+')')
  end
end
