 Problem
    create a mock movies table in sequel and mongodb which has 500 documents which has following columns/fields

    id
    movie_name
    movie_genre
    production_year ( between 1990 to 2020)
    budget ( 9000 to 20000)

    I want queries for the following in both mysql and mongo all queries should only return movie_name and production_year.


Q.1 ) find all movies which are equal to movie_name

SQL : 

     A ) Command :

    select movie_name , production_year from movies where movie_name = Supercross ;

Mongodb :

    A ) Command : 

        db.movies.find({"movie_name" : {$eq : "Supercross"}} , {"movie_name" : 1 , "production_year" : 1 , "_id" : 0}).pretty();

Q.2 ) find all movies which are not equal to movie_name 

SQL : 

     A ) Command :

    select movie_name , production_year from movies where movie_name != Supercross ;

Mongodb :

    A ) Command : 

        db.movies.find({"movie_name" : {$ne : "Supercross"}} , {"movie_name" : 1 , "production_year" : 1 , "_id" : 0}).pretty();

Q.3 ) find all movies greater than and greater than equal to a budget 

SQL : 

     A ) Command :

    select movie_name , production_year from movies where budget <= 10000 ;

Mongodb :

    A ) Command : 

        db.movies.find({"budget" : {$lte : 10000}} , {"movie_name" : 1 , "production_year" : 1 , "_id" : 0}).pretty();


Q.4 ) find all movies less than and less than equal to a  budget

SQL : 

     A ) Command :

    select movie_name , production_year from movies where budget <= 10000 ;

Mongodb :

    A ) Command : 

        db.movies.find({"budget" : {$lte : 10000}} , {"movie_name" : 1 , "production_year" : 1 , "_id" : 0}).pretty();


Q.5 ) find all movies that are produced after 2000 with budget greater than 10000

SQL : 

     A ) Command :

     select movie_name , production_year from movies where production_year > 2000 AND budget > 10000 ;

Mongodb :

    A ) Command : 

         db.movies.find({$and : [{ "production_year" : {$gt : 2000}} , { "budget" : { $gt : 10000} }]} , {"movie_name" : 1 , "production_year" : 1 , "_id" : 0} ).pretty(); 


Q.6 ) find all movies that are produced after 2000 or budget greater than 10000

SQL : 

     A ) Command :

    select movie_name , production_year from movies where production_year > 2000 OR budget > 10000 ;

Mongodb :

    A ) Command : 

         db.movies.find({$or : [{ "production_year" : {$gt : 2000}} , { "budget" : { $gt : 10000} }]} , {"movie_name" : 1 , "production_year" : 1 , "_id" : 0} ).pretty(); 


Q.7 ) find all movies that are neither produced after 2000 nor with budget greater than 10000.

SQL : 

     A ) Command :

    select movie_name , production_year from movies where production_year > 2000 NOR budget > 10000 ;

Mongodb :

    A ) Command : 

         db.movies.find({$nor : [{ "production_year" : {$gt : 2000}} , { "budget" : { $gt : 10000} }]} , {"movie_name" : 1 , "production_year" : 1 , "_id" : 0} ).pretty(); 


Q.8 ) find all movies that are not produced in 2000 or they do not have budget of 10000

SQL : 

     A ) Command :

    select movie_name , production_year from movies where production_year = 2000 NOR budget = 10000 ;

Mongodb :

    A ) Command : 

         db.movies.find({$nor : [{ "production_year" : {$eq : 2000}} , { "budget" : { $eq : 10000} }]} , {"movie_name" : 1 , "production_year" : 1 , "_id" : 0} ).pretty(); 


Q.9 ) find all movies that were produced from 2000 to 2010.

SQL : 

     A ) Command :

    select movie_name , production_year from movies where production_year between 2000 and 2010 ;

Mongodb :

    A ) Command : 

         db.movies.find({ "production_year" : {$in : [ 2000 ,2001 ,2002,2003,2004,2005,2006,2007,2008,2009,2010 ] } } , {"movie_name" : 1 , "production_year" : 1 , "_id" : 0} ).pretty(); 


Q.10 ) find all movies that are not produced in 2000 or they do not have budget of 10000

SQL : 

     A ) Command :

    select movie_name , production_year from movies where production_year != 2000 OR budget != 10000 ;

Mongodb :

    A ) Command : 

          db.movies.find( { $or : [ { "production_year" : { $nin : [ 2000 ] } } , { "budget" : { $nin : [ 10000 ] }  } ] }, {"movie_name" : 1 , "production_year" : 1 , "_id" : 0} ).pretty(); 


Q.11 ) in query 10 skip the first 10 entries and fetch the next 5

SQL : 

     A ) Command :

    select movie_name , production_year from movies where production_year != 2000 OR budget != 10000 offset 5 rows limit 5;

Mongodb :

    A ) Command : 

          db.movies.find( { $or : [ { "production_year" : { $nin : [ 2000 ] } } , { "budget" : { $nin : [ 10000 ] }  } ] }, {"movie_name" : 1 , "production_year" : 1 , "_id" : 0} ).skip(10).limit(5).pretty(); 


Q.12 ) remove movie genre from the first 10 movies in query 10.

SQL : 

     A ) Command :

   ALTER TABLE "table_name" DROP COLUMN "column_name" limit 10;

Mongodb :

    A ) Command : 

          db.movies.update( { $or : [ { "production_year" : { $nin : [ 2000 ] } } , { "budget" : { $nin : [ 10000 ] }  } ] }, { $unset : {"movie_genre" = ""} } )

          db.movies.find( { $or : [ { "production_year" : { $nin : [ 2000 ] } } , { "budget" : { $nin : [ 10000 ] }  } ] }, {"movie_name" : 1 , "production_year" : 1 , "_id" : 0} ).skip(10).limit(5).pretty();
