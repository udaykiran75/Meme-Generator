import {Component} from 'react'
import {
  MainContainer,
  Heading,
  InputContainer,
  Input,
  Label,
  Form,
  Button,
  Select,
  MemeText,
  Container,
  FormContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].displayText,
    imageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    fontSizeInput: '',
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onSubmitButton = event => {
    event.preventDefault()
    const {imageUrl, topText, bottomText, fontSize} = this.state
    this.setState({
      imageUrlInput: imageUrl,
      topTextInput: topText,
      bottomTextInput: bottomText,
      fontSizeInput: fontSize,
    })
  }

  renderMeme = () => {
    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,
    } = this.state
    return (
      <Container image={imageUrlInput} data-testid="meme">
        <MemeText fontsize={fontSizeInput}>{topTextInput}</MemeText>
        <MemeText fontsize={fontSizeInput}>{bottomTextInput}</MemeText>
      </Container>
    )
  }

  renderformelements = () => {
    const {imageUrl, topText, bottomText, fontSize} = this.state

    return (
      <FormContainer>
        <InputContainer>
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input
            type="text"
            id="imageUrl"
            placeholder="Enter the image URL"
            value={imageUrl}
            onChange={this.onChangeImageUrl}
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="topText">Top Text</Label>
          <Input
            type="text"
            id="topText"
            placeholder="Enter the Top Text"
            value={topText}
            onChange={this.onChangeTopText}
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="bottomText">Bottom Text</Label>
          <Input
            type="text"
            id="bottomText"
            placeholder="Enter the Bottom Text"
            value={bottomText}
            onChange={this.onChangeBottomText}
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="fontSize">Font Size</Label>
          <Select
            value={fontSize}
            onChange={this.onChangeFontSize}
            id="fontSize"
          >
            {fontSizesOptionsList.map(option => (
              <option key={option.optionId}>{option.displayText}</option>
            ))}
          </Select>
        </InputContainer>
        <Button type="submit">Generate</Button>
      </FormContainer>
    )
  }

  render() {
    return (
      <MainContainer>
        <Heading>Meme Generator</Heading>
        <Form onSubmit={this.onSubmitButton}>
          {this.renderMeme()}
          {this.renderformelements()}
        </Form>
      </MainContainer>
    )
  }
}
export default MemeGenerator
