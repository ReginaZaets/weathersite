import React from "react";
import { List, ListItem, ListUser, ListUserItem } from "./ListItem";
import { ListItemProps } from "../../../lib/types";

const ListItemUser = ({ weather, currentWeather, onOpenItem }: ListItemProps) => {
  return (
    <List>
      {weather.map((item) => (
        <ListItem
          data-testid="users"
          key={item.id}
          onClick={() => onOpenItem(item)}
        >
          {item.login}
          {currentWeather?.id === item.id && (
            <ListUser>
              <ListUserItem>Логин: {currentUser.login}</ListUserItem>
              <ListUserItem>
                Ссылка на профиль: {currentUser.html_url}
              </ListUserItem>
              <ListUserItem>
                Кол-во репозиториев: {currentUser.repos_url?.length}
              </ListUserItem>
            </ListUser>
          )}
        </ListItem>
      ))}
    </List>
  );
};

export default ListItemUser;
