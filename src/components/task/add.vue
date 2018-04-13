<template>
  <div id="addtask">
    <Modal
        v-model="modal6"
        title="Add Task"
        :width="680">
      <Form>
        <FormItem>
          <Input placeholder="Title"></Input>
        </FormItem>
        <FormItem>
          <Input placeholder="Details"></Input>
        </FormItem>
        <FormItem>
          <DatePicker type="daterange" placeholder="Start Time & End Time" style="width: 200px"></DatePicker>
        </FormItem>
        <FormItem>
          <Select v-model="model1" style="width:200px" placeholder="Type">
            <Option v-for="item in select" :value="item.value" :key="item.value">{{ item.type }}</Option>
          </Select>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
import {
  Input,
  DatePicker,
  Button,
  Col,
  Row,
  Modal,
  Select,
  Form,
  FormItem,
  Option
} from "iview";
export default {
  data() {
    return {
      modal6: true,
      model1: '',
      select: [
        {
          type: 'main',
          value: 11
        },
        {
          type: 'aux',
          value: 12
        }
      ]
    };
  },
  components: {
    Input,
    DatePicker,
    Button,
    Col,
    Row,
    Modal,
    Select,
    Form,
    FormItem,
    Option
  }
};
</script>

<style scoped>

</style>