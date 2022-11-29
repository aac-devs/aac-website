// ###############################################################################################################
// ###############################################################################################################
// STORAGE EVENT OBJECT:
type StorageEventType =
  | EventType
  // The event occurs when a Web Storage area is updated
  | 'storage';

interface StorageEventProps {
  // Returns the key of the changed storage item
  readonly key: string | null;
  // Returns the new value of the changed storage item
  readonly newValue: string | null;
  // Returns the old value of the changed storage item
  readonly oldValue: string | null;
  // Returns an object representing the affected storage object
  readonly storageArea: Storage | null;
  // Returns the URL of the changed item's document
  readonly url: string;
}
