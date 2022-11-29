// ###############################################################################################################
// ###############################################################################################################
// INPUT EVENT OBJECT: (For user input)

// Events:
type InputEventType =
  | UiEventType
  // The event occurs when an element gets user input
  | 'input';

// Properties:
interface InputEventProps {
  // Returns the inserted characters
  readonly data: string | null;
  // Returns an object containing information about the inserted/deleted data
  readonly dataTransfer: DataTransfer | null;
  // Returns an array containing target ranges that will be affected by the insertion/deletion
  readonly getTargetRanges: () => StaticRange[];
  // Returns the type of the change (i.e "inserting" or "deleting")
  readonly inputType: InputTypeOption;
  // Returns whether the state of the event is composing or not
  readonly isComposing: boolean;
}

type InputTypeOption =
  | 'insertText'
  | 'insertReplacementText'
  | 'insertLineBreak'
  | 'insertParagraph'
  | 'insertOrderedList'
  | 'insertUnorderedList'
  | 'insertHorizontalRule'
  | 'insertFromYank'
  | 'insertFromDrop'
  | 'insertFromPaste'
  | 'insertTranspose'
  | 'insertCompositionText'
  | 'insertFromComposition'
  | 'insertLink'
  | 'deleteByComposition'
  | 'deleteCompositionText'
  | 'deleteWordBackward'
  | 'deleteWordForward'
  | 'deleteSoftLineBackward'
  | 'deleteSoftLineForward'
  | 'deleteEntireSoftLine'
  | 'deleteHardLineBackward'
  | 'deleteHardLineForward'
  | 'deleteByDrag'
  | 'deleteByCut'
  | 'deleteByContent'
  | 'deleteContentBackward'
  | 'deleteContentForward'
  | 'historyUndo'
  | 'historyRedo'
  | 'formatBold'
  | 'formatItalic'
  | 'formatUnderline'
  | 'formatStrikethrough'
  | 'formatSuperscript'
  | 'formatSubscript'
  | 'formatJustifyFull'
  | 'formatJustifyCenter'
  | 'formatJustifyRight'
  | 'formatJustifyLeft'
  | 'formatIndent'
  | 'formatOutdent'
  | 'formatRemove'
  | 'formatSetBlockTextDirection'
  | 'formatSetInlineTextDirection'
  | 'formatBackColor'
  | 'formatFontColor'
  | 'formatFontName';

/*
Technical Details
  none
*/
