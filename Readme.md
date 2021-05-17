An API built for grooovy app which is a personal music Web Application like spotify and Tidal. The API will be using nodejs and express as the framework. The database is mongoDB and I will not use mongoose for this project since the support for the package sucks these days. I might use Sockets in the future too.

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