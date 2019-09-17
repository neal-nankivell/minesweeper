export default interface ConfigurationEditorProps {
  width: number;
  height: number;
  mineCount: number;
  disabled: boolean;
  updateConfiguration: (
    height: number,
    width: number,
    mineCount: number
  ) => void;
}
