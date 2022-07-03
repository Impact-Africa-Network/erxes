import React from 'react';
import { FormGroup, ControlLabel, Button, FormControl } from '@erxes/ui/src';
import { IProductCategory } from '@erxes/ui-products/src/types';
import { FlexRow } from '../../../styles';
import { CatProd, IPos, ISlotGroup } from '../../../types';
import Modal from 'react-bootstrap/Modal';

type Props = {
  removeMapping: (_id: string) => void;
  key: string;
  item: ISlotGroup;
  productCategories: IProductCategory[];
  pos: IPos;
  onSubmit: (group: ISlotGroup) => void;
  slotGroup?: ISlotGroup;
  closeModal: () => void;
};

type State = {
  slotGroup: ISlotGroup;
};

export default class PosProdItem extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const { item } = props;

    this.state = {
      slotGroup: props.slotGroup || {
        _id: `temporaryId${String(Math.random())}`,
        code: '',
        name: ''
      }
    };
  }

  onClickCancel = () => {
    this.props.closeModal();
  };
  onClickSave = () => {
    this.props.onSubmit(this.state.slotGroup);
    this.props.closeModal();
  };
  onChange = (key: string, value: any) => {
    this.setState({ [key]: value } as any);
  };
  onChangeFunction = (name: any, value: any) => {
    const { slotGroup } = this.state;
    slotGroup[name] = value;
    this.setState({ slotGroup });
  };

  render() {
    const { item, removeMapping } = this.props;

    const onChangeName = e => {
      this.onChangeFunction(
        'name',
        (e.currentTarget as HTMLInputElement).value
      );
    };
    const onChangeCode = e => {
      this.onChangeFunction(
        'code',
        (e.currentTarget as HTMLInputElement).value
      );
    };

    return (
      <>
        <FlexRow key={item._id}>
          <FormGroup>
            <ControlLabel>Code </ControlLabel>
            <FormControl name="code" autoFocus={true} onChange={onChangeCode} />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Name</ControlLabel>
            <FormControl name="name" autoFocus={true} onChange={onChangeName} />
          </FormGroup>
          <Button
            btnStyle="danger"
            icon="trash"
            onClick={() => removeMapping(item._id)}
          />
        </FlexRow>
        <Modal.Footer>
          <Button
            btnStyle="simple"
            type="button"
            icon="times-circle"
            onClick={this.onClickCancel}
          >
            Cancel
          </Button>

          <Button
            onClick={this.onClickSave}
            btnStyle="success"
            icon={'plus-circle'}
          >
            {'Save'}
          </Button>
        </Modal.Footer>
      </>
    );
  }
}
