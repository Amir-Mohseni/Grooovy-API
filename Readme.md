
DataBase Structure

1. Users

* Name: String
* Password: String( hashed_pass )
* Followings: Array( singer_id )
* FavoriteSongs: Array( song_id )
* FavoriteSinger: Array( singer_id )
* FavoriteGenres: Array( genre_id )
* Playlists: Array( playlist )

2. Songs

* Title: String
* Singer: singer_id
* MadeIn: Date()
* Genre: genre_id

3. Singers

* Name: String
* Biography: String(Long Text)
* Songs: Array( Song_id )
* FollowersNumber: Number
* Image: String( URL )  

4. Albums

* Name: String
* Singers: Array( Seinger_id )

5. Genres

* Name: String

6. Playlists

* Name: String
* BelongsTo: String( user_id )
* Songs: Array( song_id )