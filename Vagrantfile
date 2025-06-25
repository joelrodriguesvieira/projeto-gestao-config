Vagrant.configure("2") do |config|
  config.vm.define "vm1" do |vm1|
    vm1.vm.box = "ubuntu/bionic64"
    vm1.vm.hostname = "vm1"
    vm1.vm.network "private_network", ip: "192.168.56.10"
    vm1.vm.provider "virtualbox" do |vb|
      vb.memory = 1024
    end
  end

  config.vm.define "vm2" do |vm2|
    vm2.vm.box = "ubuntu/bionic64"
    vm2.vm.hostname = "vm2"
    vm2.vm.network "private_network", ip: "192.168.56.11"
    vm2.vm.synced_folder "./", "/home/vagrant/vagrant_data"
    
    vm2.vm.provider "virtualbox" do |vb|
      vb.memory = 2048
    end

    vm2.vm.provision "shell", inline: <<-SHELL
      curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
      sudo apt-get install -y nodejs

      cd /home/vagrant/vagrant_data

      npm install

      nohup npm run dev > server.log 2>&1 &
    SHELL
  end
end
