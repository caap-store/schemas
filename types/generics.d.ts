import { Text, DateTime } from "./core";
import {
  Thing,
  Integer,
  Intangible,
  ItemListOrderType,
  Dataset,
} from "./index";

/**
 *
 * @see @link https://schema.org/ListItem
 *
 * @remarks
 * An list item, e.g. a step in a checklist or how-to description.
 *
 **/
export interface ListItem<T = Thing> extends Intangible {
  item: T;
  nextItem?: T;
  position?: Text | Integer;
  previousItem?: T;
}

/**
 *
 * @see @link https://schema.org/ItemList
 *
 * @remarks
 * A list of items of any sort&#x2014;for example, Top 10 Movies About Weathermen, or Top 100 Party Songs. Not to be confused with HTML lists, which are often used only for formatting.
 *
 **/
export interface ItemList<T = Text> extends Intangible {
  itemListElement: ListItem<T> | T | Array<T> | Array<ListItem<T>>;
  itemListOrder?: ItemListOrderType | Text;
  numberOfItems?: Integer;
}

/**
 *
 * @see @link https://schema.org/DataFeed
 *
 * @remarks
 * A single feed providing structured information about one or more entities or topics.
 *
 **/
export interface DataFeed<T = Text> extends Dataset {
  dataFeedElement: T | DataFeedItem<T> | Array<T> | Array<DataFeedItem<T>>;
}

/**
 *
 * @see @link https://schema.org/DataFeedItem
 *
 * @remarks
 * A single item within a larger data feed.
 *
 **/
export interface DataFeedItem<T = Text> extends Intangible {
  dateCreated?: DateTime | Date;
  dateDeleted?: DateTime | Date;
  dateModified?: DateTime | Date;
  item: T;
}
