1. Add a “Clear Filter” button
Suggestion ->  
```
   <button onClick={() => setSearchXXX

   ```

2. Show total results
   Suggestion ->  
   ```
   <p>Showing {filtered.XXX} de {users.XXX} users</p>

   ```

3. Add a new searchable item  


4. Change the window  title


5.  Change the page title

6.  Change the main background color of the page

7.  Change the search placholder message
  
8. Add a new searchable item

9. Highlight the typed text in the input
    Suggestion
   ```
   .search:not(:placeholder-shown) {
    border-color: #4da3ff;
    background-color: #1c2535;
}
```

```
    <input
    className={`search ${search ? "active" : ""}`}
    ...
    />
```
```

10. Add emojis or icons to each user  
 
11. Add a footer message  

12. Add a horizontal line between the header and the list

13. Add a new attribute to the card  
The users you get from `https://jsonplaceholder.typicode.com/users` already have several attributes. Get a new attribute and add it to the card.



